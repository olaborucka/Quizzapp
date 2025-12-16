import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; 

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    // 1. To jest Twoja "Baza Danych" wszystkich graczy.
    // Trzymamy tu obiekt w stylu: { "Ola": 100, "Marek": 20 }
    const [usersDb, setUsersDb] = useLocalStorage("quizUsersDB", {});

    // 2. To jest aktualna sesja (kto jest zalogowany teraz)
    const [user, setUser] = useLocalStorage("currentUser", null);
    
    // 3. Punkty w aktualnej grze (trzymamy w zwykłym useState, bo synchronizujemy je z bazą poniżej)
    const [points, setPoints] = useState(0);

    // --- FUNKCJA LOGOWANIA ---
    const handleLogin = (nick) => {
        setUser(nick);
        
        // Sprawdzamy, czy ten nick już grał
        if (usersDb[nick]) {
            // Jeśli tak, wczytaj jego punkty z bazy
            setPoints(usersDb[nick]);
        } else {
            // Jeśli to nowy gracz, ustaw 0
            setPoints(0);
        }
    }

    // --- FUNKCJA WYLOGOWANIA ---
    const handleLogout = () => {
        // Tylko czyścimy sesję ("wstajemy od komputera")
        setUser(null);
        setPoints(0);
        
        // WAŻNE: Usuwamy tylko informację KTO jest zalogowany, 
        // ale NIE KASUJEMY bazy danych (usersDb)!
        localStorage.removeItem("currentUser");
    }

    // --- AUTOMATYCZNY ZAPIS ---
    // Ten efekt uruchamia się za każdym razem, gdy zmienią się punkty.
    // Jeśli ktoś jest zalogowany, aktualizujemy jego wynik w "Bazie Danych".
    useEffect(() => {
        if (user) {
            setUsersDb(prevDb => ({
                ...prevDb,      // Zachowaj innych graczy
                [user]: points  // Zaktualizuj tylko obecnego gracza
            }));
        }
    }, [points, user]); // Reaguj na zmiany punktów i użytkownika

    const contextValue = {
        user,
        points,
        setPoints,
        handleLogin,
        handleLogout
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};