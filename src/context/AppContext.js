import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; 

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [usersDb, setUsersDb] = useLocalStorage("quizUsersDB", {});
    const [user, setUser] = useLocalStorage("currentUser", null);

    // Domyślne stany (synchronizowane z userem przy logowaniu)
    const [inventory, setInventory] = useState(['white']); // Zmienilem na useState, bo i tak ładujemy to z usersDb
    const [equipped, setEquipped] = useState({ 
        background: 'white', 
        character: null 
    });
    
    const [points, setPoints] = useState(0);

    
    // --- FUNKCJA KUPOWANIA ---
    // --- POPRAWIONA FUNKCJA KUPOWANIA ---
    const buyItem = (item) => {
        // Zmieniamy item.id na item.item (czyli zapisujemy 'black' a nie '2')
        if (item.price <= points && !inventory.includes(item.item)) {
            setPoints(points - item.price);
            setInventory([...inventory, item.item]); 
            return true; // Sukces
        }
        return false; // Porażka
    }

    // --- POPRAWIONA FUNKCJA ZAKŁADANIA ---
    const equipItem = (item) => {
        // 1. Sprawdzamy czy mamy przedmiot (szukamy nazwy np. 'white')
        if (inventory.includes(item.item)) {
            setEquipped(prev => ({
                ...prev,
                // 2. WAŻNE: Używamy 'category' (bo tak nazwałaś to w sklepie), a nie 'type'
                [item.category]: item.item 
            }));
            return true;
        }
        return false;
    }
    const resetAppearance = () => {
        setEquipped({ 
            background: 'default', // <--- TERAZ USTAWIA .bg-default
            character: null 
        });
    }


    // --- FUNKCJA LOGOWANIA ---
    const handleLogin = (nick) => {
        setUser(nick);
        
        if (usersDb[nick]) {
            // Wczytaj wszystko z bazy
            setPoints(usersDb[nick].points || 0);
            setInventory(usersDb[nick].inventory || ['white']); // POPRAWKA: Wczytaj plecak
            setEquipped(usersDb[nick].equipped || { background: 'white', character: null }); // POPRAWKA: Wczytaj strój
        } else {
            // Nowy gracz - ustaw domyślne
            setPoints(0);
            setInventory(['white']);
            setEquipped({ background: 'white', character: null });
        }
    }

    // --- FUNKCJA WYLOGOWANIA ---
    const handleLogout = () => {
        setUser(null);
        setPoints(0);
        setInventory(['white']); // Resetuj po wylogowaniu
        setEquipped({ background: 'white', character: null });
        
        localStorage.removeItem("currentUser");
    }

    // --- AUTOMATYCZNY ZAPIS ---
    useEffect(() => {
        if (user) {
            setUsersDb(prevDb => ({
                ...prevDb,
                [user]: { 
                    points: points,
                    inventory: inventory, // POPRAWKA: Zapisujemy też plecak!
                    equipped: equipped    // POPRAWKA: Zapisujemy też strój!
                } 
            }));
        }
    }, [points, inventory, equipped, user]); // Reaguj na zmiany wszystkiego


    // --- EFEKT WIZUALNY TŁA ---
    // To sprawi, że tło strony zmieni się od razu po założeniu przedmiotu
    useEffect(() => {
        // Ustawia klasę np. "bg-black" albo "bg-white" na elemencie <body>
        document.body.className = `bg-${equipped.background}`;
    }, [equipped.background]);


    // POPRAWKA: Musisz udostępnić te rzeczy reszcie aplikacji!
    const contextValue = {
        user,
        points, setPoints,
        inventory, 
        equipped,  
        buyItem,   
        equipItem, 
        handleLogin,
        handleLogout,
        resetAppearance
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};