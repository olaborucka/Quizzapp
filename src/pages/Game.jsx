import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import LifelinesPanel from '../components/game/LifelinesPanel';

function Game() {

    const { points, setPoints, inventory, consumeItem, saveScore, allQuestions, incrementGamesPlayed} = useContext(AppContext);

    const location = useLocation();
    const navigate = useNavigate();

    // zabezpieczenie przed blednym adresem
    const { type, category } = location.state || { type: 'text', category: 'MIX' };

    // --- STANY ---
    const [gameQuestions, setGameQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [score, setScore] = useState(0);                              
    const [isGameOver, setIsGameOver] = useState(false);
    const [hiddenAnswers, setHiddenAnswers] = useState([]);

    const [timeleft, setTimeleft] = useState(15)
    const [isBlurred, setIsBlurred] = useState(type === 'visual')

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Ładowanie i filtrowanie 
    useEffect(() => {
        let filteredQuestions = allQuestions.filter(q => q.type === type);

        if (category !== 'MIX') {
            filteredQuestions = filteredQuestions.filter(q => q.category === category);
        }
        
        if (filteredQuestions.length === 0) {
            alert("Brak pytań...");
            navigate('/'); 
        } else {
            setGameQuestions(filteredQuestions);
        }
    }, [type, category, navigate]);

    // resetowanie pytania
    useEffect(() => {
        setHiddenAnswers([]); // czysci koła
        setTimeleft(15)
        setIsBlurred(type === 'visual')
    }, [currentQuestionIndex, type]);

    // timer
    useEffect(() => {
        if (isGameOver || isProcessing) return;

        const timerId = setInterval(() => {
            setTimeleft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    handleAnswerClick(null); // jesli brak odpowiedzi = 0ptk
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [currentQuestionIndex, isGameOver, isProcessing]);

    // koniec gry
    useEffect(() => {
        if (isGameOver){
            const newResult = {
                score: score,
                points: score * 10,
                category: category,
                type: type,
                date: new Date().toLocaleDateString(),
            };
            saveScore(newResult)
            incrementGamesPlayed()
        }
    }, [isGameOver])

    // klikanie odp
    const handleAnswerClick = (answer) => {
        if (isProcessing) return;

        setIsProcessing(true);
        setSelectedAnswer(answer);  

        const currentQuestion = gameQuestions[currentQuestionIndex];
        const isCorrect = answer === currentQuestion.correctAnswer;


        if (isCorrect) {
            setScore(prev => prev + 1);
            setPoints(prev => prev + 10);
        }
        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            
            // kolejne pytanie albo koniec gry
            if (nextQuestionIndex < gameQuestions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedAnswer(null); 
                setIsProcessing(false); 
            } else {
                setIsGameOver(true);
            }
        }, 1500); 
    };

    //FUNKCJA POMOCNICZA DO KOLOROWANIA PRZYCISKÓW
    const getButtonClass = (answer) => {
        let className = 'answer-btn';
        if (!isProcessing) return className;

        const currentQuestion = gameQuestions[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            return className + ' correct';
        }
        if (answer === selectedAnswer) {
            return className + ' wrong';
        }

        return className;
    };
    
    // koła ratunkowe 
    const LIFELINE_PRICES = {
        fiftyFifty: 300,
        askFriend: 400,
        oneWrong: 100,
        reveal: 200
    };

    const handleLifeline = (type) => {
        if (isProcessing) return;

        if (type === 'reveal' && !isBlurred) return

        const hasItem = inventory.includes(type);
        const price = LIFELINE_PRICES[type];

        //kupowanie
        if (!hasItem) {
            if (points >= price) {
                const confirm = window.confirm(`Nie posiadasz tego koła ratunkowego. Czy chcesz je kupić za ${price} punktów?`);
                if (confirm) {
                    setPoints(prev => prev - price);
                } else {
                    return;
                }
            } else {
                alert("Nie masz wystarczająco punktów na zakup tego koła ratunkowego.");
                return;
            }
        
        }else {
            consumeItem(type);
        }

        
        const currentQuestion = gameQuestions[currentQuestionIndex];
        const correctIndex = currentQuestion.answers.findIndex(ans => ans === currentQuestion.correctAnswer);

        // indexy blednych odpowiedzi
        let wrongIndexes = currentQuestion.answers
            .map((_, idx) => idx)
            .filter(idx => idx !== correctIndex);
        

        // logika kół
        switch(type) {
            case 'reveal':
                setIsBlurred(false)
                setHiddenAnswers( prev => [...prev, 'REVEALED'])
                break
            case 'fiftyFifty':
                wrongIndexes = wrongIndexes.sort(() => Math.random()- 0.5) ;
                setHiddenAnswers(wrongIndexes.slice(0, 2));
                break;

            case 'oneWrong':
                wrongIndexes = wrongIndexes.sort(() => Math.random()- 0.5) ;
                setHiddenAnswers([wrongIndexes[0]]);
                break;
            case 'askFriend':
                const isFriendSmart = Math.random() > 0.2; 

                let suggestion;
                if (isFriendSmart) {
                    suggestion = currentQuestion.correctAnswer;
                } else {
                    const randomWrongIndex = wrongIndexes[Math.floor(Math.random() * wrongIndexes.length)];
                    suggestion = currentQuestion.answers[randomWrongIndex];
                }
                alert(`Twój przyjaciel sugeruje odpowiedź: "${suggestion}"`);
                break;

            default:
                break;
        }
    }



    // RENDER
    if (gameQuestions.length === 0) {
        return (
            <div className="game-container loading-screen">
                <p>Ładowanie pytań...</p>
                <svg className='loading-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/>
                </svg>
            </div>
        );
    }

    // KONIEC GRY
    if (isGameOver) {
        return (
            <div className="game-container result-screen">
                <h2>Koniec Gry! 🎉</h2>
                
                <div className="score-display">
                    {score} / {gameQuestions.length}
                </div>
                
                <p>Zdobyłeś łącznie: <strong>{score * 10} 💰</strong></p>
                <p>
                    {score === gameQuestions.length ? "Perfekcyjnie! Jesteś mistrzem! 🏆" : 
                     score > gameQuestions.length / 2 ? "Dobra robota! 👍" : 
                     "Następnym razem pójdzie lepiej! 💪"}
                </p>

                <div className="result-buttons">
                    <button onClick={() => navigate('/')}>Menu Główne</button>
                    <button onClick={() => window.location.reload()}>Zagraj ponownie</button>
                </div>
                <button onClick={() => navigate('/leaderboard')}>🏆 Zobacz Wyniki</button>
            </div>
        );
    }

    const currentQuestion = gameQuestions[currentQuestionIndex];
    

    // GRA WŁAŚCIWA
    return(
        <div className='game-container'>
            <div className='game-header'>
                <span>Kategoria: {category}</span>
                <span className={`timer-display ${timeleft < 5 ? 'low-time' : ''}`}>
                    ⏳ {timeleft}s
                </span>
                <span>Pytanie: {currentQuestionIndex + 1} / {gameQuestions.length} </span>
            </div>
            
            {type === 'visual' && (
                <div className='visual-container'>
                    <img 
                        src={currentQuestion.image} 
                        alt="Zagadka" 
                        className= {`visual-img ${isBlurred ? 'blurred' : ''}`}
                    />
                </div>
            )}
            
            <div className='question-text'>
                <h2>{currentQuestion.question}</h2>
            </div>
            <LifelinesPanel 
                inventory={inventory} 
                onUseLifeline={handleLifeline}
                isDisabled={isProcessing}
                hiddenAnswers={hiddenAnswers}
                gameType={type}
            />
            
            <div className='answers-grid'>
                {currentQuestion.answers.map((answer, index) => {
                
                    const isHidden = hiddenAnswers.includes(index);

                    return (
                        <button 
                            key={index} 
                            className={getButtonClass(answer)}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={isProcessing}
                            style={{ visibility: isHidden ? 'hidden' : 'visible' }}
                        >
                            {answer}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Game;