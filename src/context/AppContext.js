import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; 
import { questions as defaultQuestions } from "../data/data"; 

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [usersDb, setUsersDb] = useLocalStorage("quizUsersDB", {});
    const [user, setUser] = useLocalStorage("currentUser", null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [highScores, setHighScores] = useLocalStorage("highScores", []);
    
    // PYTANIA
    const [customQuestions, setCustomQuestions] = useLocalStorage("customQuestions", []);
    
    const allQuestions = [...defaultQuestions, ...customQuestions];

    const addQuestion = (newQ) => {
        const questionWithId = { ...newQ, id: Date.now() }; 
        setCustomQuestions([...customQuestions, questionWithId]);
    };

    // STANY GRACZA
    const [points, setPoints] = useState(0);
    const [inventory, setInventory] = useState(['default']); 
    const [equipped, setEquipped] = useState({ background: 'default', character: null });
    const [gamesPlayed, setGamesPlayed] = useState(0); 
    const [achievements, setAchievements] = useState([]); 

    const BADGES = [
        { id: 1, name: "Początkujący",      condition: (pts, games) => games >= 1 },
        { id: 2, name: "Średniozaawansowany", condition: (pts, games) => games >= 10 },
        { id: 3, name: "Ekspert",           condition: (pts, games) => games >= 30 },
        { id: 4, name: "Weteran",           condition: (pts, games) => games >= 100 },
        { id: 5, name: "Bogacz",            condition: (pts, games) => pts >= 1000 },
        { id: 6, name: "Elon Musk",         condition: (pts, games) => pts >= 3000 },
        { id: 7, name: "Tygrys",            condition: (pts, games) => pts >= 800 && games >= 20 },
    ];

    // Automat odznak
    useEffect(() => {
        const unlocked = BADGES.filter(badge => badge.condition(points, gamesPlayed));
        setAchievements(unlocked);
    }, [points, gamesPlayed]);

    const incrementGamesPlayed = () => {
        setGamesPlayed(prev => prev + 1);
    };

    // LOGIKA LOGOWANIA I ZAPISU
    const handleLogin = (nick) => {
        setUser(nick);
        setIsDataLoaded(true); 
        if (usersDb[nick]) {
            setPoints(usersDb[nick].points || 0);
            setInventory(usersDb[nick].inventory || ['default']);
            setEquipped(usersDb[nick].equipped || { background: 'default', character: null });
            setGamesPlayed(usersDb[nick].gamesPlayed || 0);
        } else {
            setPoints(0);
            setInventory(['default']);
            setEquipped({ background: 'default', character: null });
            setGamesPlayed(0);
        }
    }

    const handleLogout = () => {
        setIsDataLoaded(false); 
        setUser(null);
        setPoints(0);
        setInventory(['default']); 
        setEquipped({ background: 'default', character: null }); 
        setGamesPlayed(0); 
        localStorage.removeItem("currentUser");
    }

    useEffect(() => {
        if (user && usersDb[user]) {
            setPoints(usersDb[user].points || 0);
            setInventory(usersDb[user].inventory || ['default']);
            setEquipped(usersDb[user].equipped || { background: 'default', character: null });
            setGamesPlayed(usersDb[user].gamesPlayed || 0); 
        }
        setIsDataLoaded(true);
    }, []); 

    useEffect(() => {
        if (!isDataLoaded) return; 
        if (user) {
            setUsersDb(prevDb => ({
                ...prevDb,
                [user]: { points, inventory, equipped, gamesPlayed } 
            }));
        }
    }, [points, inventory, equipped, gamesPlayed, user, isDataLoaded]);

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