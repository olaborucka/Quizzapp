import { useNavigate } from 'react-router-dom';

function VisualGame() {
    const navigate = useNavigate();

    // Ta funkcja uruchamia grę
    const startGame = (selectedCategory) => {
        navigate('/play', { 
            state: { 
                type: 'visual',       
                category: selectedCategory 
            } 
        });
    }

    return (
        <div className="menu-container">
            <h3>PicQuiz: Wybierz kategorię </h3>
            
            <div className="buttons-grid">
                <button onClick={() => startGame('MIX')}>MIX (Wszystko)</button>
                <button onClick={() => startGame('Geografia')}>Geografia</button>
                <button onClick={() => startGame('Biologia')}>Biologia</button>
                <button onClick={() => startGame('Kultura i Sztuka')}>Kultura i Sztuka</button>
                <button onClick={() => startGame('Technologia i Motoryzacja')}>Technologia</button>
                <button onClick={() => startGame('Jedzenie i Przedmioty')}>Jedzenie</button>
                
                <button onClick={() => startGame('Test')}>Test błędów</button>
            </div>
        </div>
    )
}

export default VisualGame;