import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';


function TextGame(){
    const navigate = useNavigate();
    const { inventory } = useContext(AppContext);

    const isMixUnlocked = inventory.includes('MIX-textMode');
    // Ta funkcja uruchamia grę 
    const startGame = (selectedCategory) => {
        navigate('/play', {
            state: {
                type: 'text',
                category: selectedCategory
            }
        });
    }
    
    return(
        <div className="menu-container">
            <h3>Textquiz: Wybierz kategorię </h3>
            
            <div className="buttons-grid">
                {isMixUnlocked ? <button onClick={() => startGame('MIX')}>MIX</button> : <p className='locked'>tryb mix zablokowany</p>}
                <button onClick={() => startGame('Informatyka')}>Informatyka</button>
                <button onClick={() => startGame('Geografia')}>Geografia</button>
                <button onClick={() => startGame('Histotia')}>Historia</button>
                <button onClick={() => startGame('Nauka')}>Nauka</button>
                <button onClick={() => startGame('Kultura')}>Kultura</button> 
            </div>
            

        </div>
    )
}

export default TextGame