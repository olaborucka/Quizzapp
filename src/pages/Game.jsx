import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { questions } from '../data/data'; 

function Game() {
    const { setPoints } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const { type, category } = location.state || { type: 'text', category: 'MIX' };

    // --- STANY ---
    const [gameQuestions, setGameQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [score, setScore] = useState(0);                              
    const [isGameOver, setIsGameOver] = useState(false);

    // NOWOŚĆ: Stany do obsługi kolorów i blokady klikania
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Co kliknął gracz?
    const [isProcessing, setIsProcessing] = useState(false);    // Czy czekamy na zmianę pytania?

    // --- EFEKT: Ładowanie i filtrowanie ---
    useEffect(() => {
        let filteredQuestions = questions.filter(q => q.type === type);

        if (category !== 'MIX') {
            filteredQuestions = filteredQuestions.filter(q => q.category === category);
        }
        
        if (filteredQuestions.length === 0) {
            // alert("Brak pytań..."); // Możesz odkomentować
            navigate('/'); 
        } else {
            setGameQuestions(filteredQuestions);
        }
    }, [type, category, navigate]);

    // --- LOGIKA KLIKNIĘCIA (Z OPÓŹNIENIEM) ---
    const handleAnswerClick = (answer) => {
        // 1. Jeśli już coś kliknięto i czekamy - ignoruj kolejne kliknięcia
        if (isProcessing) return;

        setIsProcessing(true);       // Blokujemy przyciski
        setSelectedAnswer(answer);   // Zapisujemy co wybrano (żeby pokolorować)

        const currentQuestion = gameQuestions[currentQuestionIndex];
        const isCorrect = answer === currentQuestion.correctAnswer;

        // 2. Jeśli dobrze - dodaj punkty (ale jeszcze nie zmieniaj pytania!)
        if (isCorrect) {
            setScore(prev => prev + 1);
            setPoints(prev => prev + 10);
            // Tu można dodać dźwięk sukcesu, np. playAudio('success');
        } else {
            // Tu można dodać dźwięk błędu
        }

        // 3. Czekamy 1.5 sekundy (1500ms), żeby gracz zobaczył kolor
        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            
            if (nextQuestionIndex < gameQuestions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedAnswer(null); // Reset wyboru
                setIsProcessing(false);  // Odblokowujemy przyciski
            } else {
                setIsGameOver(true);
            }
        }, 1500); 
    };

    // --- FUNKCJA POMOCNICZA DO KOLOROWANIA PRZYCISKÓW ---
    const getButtonClass = (answer) => {
        // Domyślna klasa
        let className = 'answer-btn';
        
        // Jeśli nic nie jest wybrane - zwróć zwykłą klasę
        if (!selectedAnswer) return className;

        const currentQuestion = gameQuestions[currentQuestionIndex];

        // LOGIKA KOLORÓW:
        if (answer === currentQuestion.correctAnswer) {
            // Zawsze podświetlaj poprawną odpowiedź na ZIELONO (nawet jak gracz wybrał źle)
            return className + ' correct';
        }

        if (answer === selectedAnswer && answer !== currentQuestion.correctAnswer) {
            // Jeśli gracz wybrał to, a to jest błąd - podświetl na CZERWONO
            return className + ' wrong';
        }

        return className;
    };


    // --- RENDER 1: ŁADOWANIE ---
    if (gameQuestions.length === 0) {
        return (
            <div className="game-container loading-screen">
                <p>Ładowanie pytań...</p>
                {/* Ikona ładowania */}
                <svg className='loading-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/>
                </svg>
            </div>
        );
    }

    // --- RENDER 2: KONIEC GRY (ROZBUDOWANY) ---
    if (isGameOver) {
        return (
            <div className="game-container result-screen">
                <h2>Koniec Gry! 🎉</h2>
                
                <div className="score-display">
                    {score} / {gameQuestions.length}
                </div>
                
                <p>Zdobyłeś łącznie: <strong>{score * 10} 💰</strong></p>

                {/* Wiadomość zależna od wyniku */}
                <p>
                    {score === gameQuestions.length ? "Perfekcyjnie! Jesteś mistrzem! 🏆" : 
                     score > gameQuestions.length / 2 ? "Dobra robota! 👍" : 
                     "Następnym razem pójdzie lepiej! 💪"}
                </p>

                <div className="result-buttons">
                    <button onClick={() => navigate('/')}>Menu Główne</button>
                    {/* Przeładowanie strony resetuje grę */}
                    <button onClick={() => window.location.reload()}>Zagraj ponownie</button>
                </div>
            </div>
        );
    }

    const currentQuestion = gameQuestions[currentQuestionIndex];

    // --- RENDER 3: GRA WŁAŚCIWA ---
    return(
        <div className='game-container'>
            <div className='game-header'>
                <span>Kategoria: {category}</span>
                <span>Pytanie: {currentQuestionIndex + 1} / {gameQuestions.length} </span>
            </div>
            
            {type === 'visual' && (
                <div className='visual-container'>
                    <img 
                        src={currentQuestion.image} 
                        alt="Zagadka" 
                        className='visual-img'
                    />
                </div>
            )}
            
            <div className='question-text'>
                <h2>{currentQuestion.question}</h2>
            </div>
            
            <div className='answers-grid'>
                {currentQuestion.answers.map((answer, index) => (
                    <button 
                        key={index} 
                        // TU UŻYWAMY NOWEJ FUNKCJI DO KLAS:
                        className={getButtonClass(answer)}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={isProcessing} // Zablokuj klikanie jak czekamy
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Game;