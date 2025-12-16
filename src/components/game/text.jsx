import { useNavigate } from "react-router-dom"

function TextGame(){
    const navigate = useNavigate();

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
                <button onClick={() => startGame('MIX')}>MIX</button>
                <button onClick={() => startGame('Informatyka i Technologia')}>Informatyka i Technologia</button>
                <button onClick={() => startGame('Geografia')}>Geografia</button>
                <button onClick={() => startGame('Histotia')}>Historia</button>
                <button onClick={() => startGame('Nauka')}>Nauka</button>
                <button onClick={() => startGame('Kultura')}>Kultura</button> 
            </div>
            

        </div>
    )
}

export default TextGame