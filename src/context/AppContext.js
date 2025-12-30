import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; 
import { questions as defaultQuestions } from "../data/data";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    // TO JEST BAZA DANYCH (Ona pamięta wszystko na zawsze, nawet po wylogowaniu)
    const [usersDb, setUsersDb] = useLocalStorage("quizUsersDB", {});
    
    // TO JEST SESJA (Kto jest teraz przy klawiaturze)
    const [user, setUser] = useLocalStorage("currentUser", null);

    // --- BRAMKA BEZPIECZEŃSTWA ---
    // Zapobiega nadpisaniu bazy danych pustymi wartościami po odświeżeniu strony (F5)
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [highScores, setHighScores] = useLocalStorage("highScores", []);
    // --- STANY TYMCZASOWE (Widoczne na ekranie) ---
    // ZMIANA: Startujemy z 'default' (Ciemny), a nie 'white'
    const [points, setPoints] = useState(0);
    const [inventory, setInventory] = useState(['default']); 
    const [equipped, setEquipped] = useState({ 
        background: 'default', // <--- TU BYŁ BŁĄD. Teraz jest 'default'
        character: null 
    });

    const [ gamesPlayed, setGamesPlayed ] = useLocalStorage("gamesPlayed" , 0)
    const [ achievements, setAchievements ] = useState([])
    const BADGES = [
        { id:1, name: "Początkujący", condition: (pts, games) => games >= 1},
        { id:2, name: "Średniozaawandowany", condition: (pts, games) => games >= 10},
        { id:3, name: "Ekspert", condition: (pts, games) => games >= 30},
        { id:4, name: "Weteran", condition: (pts, games) => games >= 100},

        { id:5, name: "Bogacz", condition: (pts, games) => pts >= 1000},
        { id:6, name: "Elon Musk", condition: (pts, games) => pts >= 3000},

        { id:7, name: "Tygrys", condition: (pts, games) => pts >= 800 && games >= 20},
    ]

    


    const [customQuestions, setCustomQuestions] = useLocalStorage("customQuestions", [])
    const allQuestions = [...defaultQuestions, ...customQuestions]
    const addQuestion = (newQ) => {
        const questionWithId = { ...newQ, id: Date.now() }; 
        setCustomQuestions([...customQuestions, questionWithId]);
    }
    
    // --- 1. ODZYSKIWANIE DANYCH PO ODŚWIEŻENIU (F5) ---
    useEffect(() => {
        // Jeśli jest zalogowany użytkownik (w LocalStorage) I mamy go w bazie:
        if (user && usersDb[user]) {
            console.log("Przywracam sesję po odświeżeniu dla:", user);
            
            // Wczytaj jego punkty i ekwipunek z bazy do widoku
            setPoints(usersDb[user].points || 0);
            setInventory(usersDb[user].inventory || ['default']);
            setEquipped(usersDb[user].equipped || { background: 'default', character: null });
        }
        
        // Otwieramy bramkę - teraz można bezpiecznie zapisywać zmiany
        setIsDataLoaded(true);
    }, []); // Pusta tablica = uruchom tylko raz przy starcie aplikacji

    useEffect(() => {
        const unlocked = BADGES.filter(badge => badge.condition(points, gamesPlayed))
        setAchievements(unlocked)
        
    }, [points, gamesPlayed])

    const incrementGamesPlayed = () => {
        setGamesPlayed(prev => prev + 1)
    }

    // --- FUNKCJE SKLEPU ---
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
            setEquipped(prev => ({
                ...prev,
                [item.category]: item.item 
            }));
            return true;
        }
        return false;
    }

    // ranking
    const saveScore = (result) => {
        const newEntry = { 
            user: user, 
            ...result 
        };
        const updatedScores = [...highScores, newEntry];
        updatedScores.sort((a, b) => b.points - a.points);
        setHighScores(updatedScores.slice(0, 50));
    }
    
    // --- RESETOWANIE WYGLĄDU (Przycisk w sklepie) ---
    const resetAppearance = () => {
        setEquipped({ 
            background: 'default', // Wraca do ciemnego tła
            character: null 
        });
    }


    // --- LOGOWANIE I WYLOGOWANIE ---

    const handleLogin = (nick) => {
        setUser(nick);
        // Pozwalamy na zapis, bo użytkownik właśnie wszedł
        setIsDataLoaded(true); 

        // Jeśli stary gracz - wczytaj go. Jeśli nowy - zostanie na zerach.
        if (usersDb[nick]) {
            setPoints(usersDb[nick].points);
            setInventory(usersDb[nick].inventory);
            setEquipped(usersDb[nick].equipped);
        } else {
            // Reset dla nowego gracza
            setPoints(0);
            setInventory(['default']);
            setEquipped({ background: 'default', character: null });
        }
    }

    const handleLogout = () => {
        // 1. Zamykamy bramkę zapisu!
        // Żeby czyszczenie ekranu (poniżej) nie nadpisało danych w bazie usersDb
        setIsDataLoaded(false); 
        
        // 2. Czyścimy TYLKO to, co widać na ekranie ("wstajemy od komputera")
        // Dzięki temu kolejny gracz nie zobaczy przez chwilę Twojego tła/punktów.
        setUser(null);
        setPoints(0);
        setInventory(['default']); // Reset do domyślnego
        setEquipped({ background: 'default', character: null }); // Reset do domyślnego
        
        // Czyścimy pamięć przeglądarki o tym, kto był zalogowany
        localStorage.removeItem("currentUser");
        
        // UWAGA: Zauważ, że NIE ruszamy zmiennej `usersDb`. 
        // Twoje postępy są tam bezpieczne i czekają na ponowne zalogowanie!
    }



    // --- 2. AUTOMATYCZNY ZAPIS DO BAZY ---
    useEffect(() => {
        // Jeśli bramka zamknięta (bo dopiero wczytujemy dane lub właśnie wylogowujemy) -> STOP
        if (!isDataLoaded) return; 

        if (user) {
            setUsersDb(prevDb => ({
                ...prevDb,
                [user]: { 
                    points: points,
                    inventory: inventory,
                    equipped: equipped
                } 
            }));
        }
    }, [points, inventory, equipped, user, isDataLoaded]);

    // --- EFEKT WIZUALNY TŁA ---
    useEffect(() => {
        // To ustawi klasę np. "bg-default" (Twój ciemny) lub "bg-red"
        document.body.className = `bg-${equipped.background}`;
    }, [equipped.background]);


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
        user,
        points, 
        setPoints,
        inventory,
        equipped,
        buyItem,
        equipItem,
        resetAppearance,
        handleLogin,
        handleLogout,
        consumeItem,
        saveScore,
        highScores,
        allQuestions,
        addQuestion,
        achievements,
        incrementGamesPlayed
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};