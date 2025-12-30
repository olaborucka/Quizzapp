import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; 
import { questions as defaultQuestions } from "../data/data";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [usersDb, setUsersDb] = useLocalStorage("quizUsersDB", {});
    const [user, setUser] = useLocalStorage("currentUser", null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [highScores, setHighScores] = useLocalStorage("highScores", []);
    
    // --- PYTANIA UŻYTKOWNIKA ---
    const [customQuestions, setCustomQuestions] = useLocalStorage("customQuestions", []);
    const allQuestions = [...defaultQuestions, ...customQuestions];

    const addQuestion = (newQ) => {
        const questionWithId = { ...newQ, id: Date.now() }; 
        setCustomQuestions([...customQuestions, questionWithId]);
    };

    // --- STANY GRACZA (Teraz gamesPlayed jest tutaj, a nie w osobnym localStorage) ---
    const [points, setPoints] = useState(0);
    const [inventory, setInventory] = useState(['default']); 
    const [equipped, setEquipped] = useState({ background: 'default', character: null });
    
    // 🔧 POPRAWKA: Zmieniliśmy to na zwykły useState, żeby nie było wspólne dla wszystkich
    const [gamesPlayed, setGamesPlayed] = useState(0); 
    const [achievements, setAchievements] = useState([]); 

    const BADGES = [
        { id: 1, name: "Początkujący",      condition: (pts, games) => games >= 1 },
        { id: 2, name: "Średniozaawansowany", condition: (pts, games) => games >= 10 },
        { id: 3, name: "Ekspert",           condition: (pts, games) => games >= 30 },
        { id: 4, name: "Weteran",           condition: (pts, games) => games >= 100 },
        { id: 5, name: "Bogacz",            condition: (pts, games) => pts >= 1000 },
        { id: 6, name: "Elon Musk",         condition: (pts, games) => pts >= 10000 },
        { id: 7, name: "Tygrys",            condition: (pts, games) => pts >= 800 && games >= 20 },
    ];

    // --- AUTOMAT ODZNAK (Poprawiona logika) ---
    useEffect(() => {
        // Filtrujemy odznaki, biorąc pod uwagę aktualne punkty i gry
        const unlocked = BADGES.filter(badge => badge.condition(points, gamesPlayed));
        setAchievements(unlocked);
    }, [points, gamesPlayed]);

    // 🔧 POPRAWKA: Poprawna składnia funkcji
    const incrementGamesPlayed = () => {
        setGamesPlayed(prev => prev + 1);
    };

    // --- LOGOWANIE I WCZYTYWANIE DANYCH ---
    const handleLogin = (nick) => {
        setUser(nick);
        setIsDataLoaded(true); 

        if (usersDb[nick]) {
            // Wczytujemy dane konkretnego użytkownika
            setPoints(usersDb[nick].points || 0);
            setInventory(usersDb[nick].inventory || ['default']);
            setEquipped(usersDb[nick].equipped || { background: 'default', character: null });
            // 🔧 Wczytujemy jego liczbę gier (lub 0 jeśli nie ma)
            setGamesPlayed(usersDb[nick].gamesPlayed || 0);
        } else {
            // Nowy użytkownik - wszystko na start
            setPoints(0);
            setInventory(['default']);
            setEquipped({ background: 'default', character: null });
            setGamesPlayed(0); // 🔧 Startuje z 0 gier
        }
    }

    const handleLogout = () => {
        setIsDataLoaded(false); 
        
        setUser(null);
        setPoints(0);
        setInventory(['default']); 
        setEquipped({ background: 'default', character: null }); 
        setGamesPlayed(0); // 🔧 Resetujemy licznik przy wylogowaniu
        
        localStorage.removeItem("currentUser");
    }

    // --- PRZYWRACANIE SESJI PO ODŚWIEŻENIU ---
    useEffect(() => {
        if (user && usersDb[user]) {
            setPoints(usersDb[user].points || 0);
            setInventory(usersDb[user].inventory || ['default']);
            setEquipped(usersDb[user].equipped || { background: 'default', character: null });
            setGamesPlayed(usersDb[user].gamesPlayed || 0); // 🔧 Wczytaj po F5
        }
        setIsDataLoaded(true);
    }, []); 

    // --- ZAPISYWANIE DANYCH (Teraz zapisujemy też gamesPlayed) ---
    useEffect(() => {
        if (!isDataLoaded) return; 

        if (user) {
            setUsersDb(prevDb => ({
                ...prevDb,
                [user]: { 
                    points,
                    inventory,
                    equipped,
                    gamesPlayed // 🔧 Zapisujemy liczbę gier do bazy użytkownika
                } 
            }));
        }
    }, [points, inventory, equipped, gamesPlayed, user, isDataLoaded]);

    // --- RESZTA LOGIKI (Sklep, Wygląd) ---
    useEffect(() => {
        document.body.className = `bg-${equipped.background}`;
    }, [equipped.background]);

    const buyItem = (item) => {
        if (item.price <= points && !inventory.includes(item.item)) {
            setPoints(points - item.price);
            setInventory([...inventory, item.item]); 
            return true;
        }
        return false;
    }

    const equipItem = (item) => {
        if (inventory.includes(item.item)) {
            setEquipped(prev => ({ ...prev, [item.category]: item.item }));
            return true;
        }
        return false;
    }

    const saveScore = (result) => {
        const newEntry = { user: user, ...result };
        const updatedScores = [...highScores, newEntry];
        updatedScores.sort((a, b) => b.points - a.points);
        setHighScores(updatedScores.slice(0, 50));
    }
    
    const resetAppearance = () => {
        setEquipped({ background: 'default', character: null });
    }

    const consumeItem = (itemId) => {
        if (inventory.includes(itemId)) {
            const copy = [...inventory];
            const index = copy.indexOf(itemId);
            copy.splice(index, 1);
            setInventory(copy);
            return true;
        }
        return false;
    }

    const contextValue = {
        user, points, setPoints, inventory, equipped,
        buyItem, equipItem, resetAppearance,
        handleLogin, handleLogout, consumeItem,
        saveScore, highScores,
        
        allQuestions, addQuestion,
        achievements, incrementGamesPlayed
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};