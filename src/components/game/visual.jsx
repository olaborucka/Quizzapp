import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';



function VisualGame() {
    const navigate = useNavigate();
    const { inventory } = useContext(AppContext);

    const isMixUnlocked = inventory.includes('MIX-visualMode');
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
                {isMixUnlocked ? <button onClick={() => startGame('MIX')}>MIX (Wszystko)</button> : <p className='locked'>tryb mix zablokowany</p>}
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