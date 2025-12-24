import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const shopItems = [
    //tła
    {id: 1, category: 'background', name: 'biały', price: 0, item: 'white'},
    {id: 2, category: 'background', name: 'czarny', price: 100, item: 'black'},
    {id: 3, category: 'background', name: 'niebieski', price: 150, item: 'blue'},
    {id: 4, category: 'background', name: 'zielony', price: 150, item: 'green'},
    {id: 5, category: 'background', name: 'czerwony', price: 200, item: 'red'},
    {id: 6, category: 'background', name: 'żółty', price: 200, item: 'yellow'},
    //koła ratunkowe
    {id: 7, category: 'lifeline', name: '50/50', price: 300, item: 'fiftyFifty'},
    {id: 8, category: 'lifeline', name: 'pytanie do przyjaciela', price: 400, item: 'askFriend'},
    {id:9, category: 'lifeline', name: 'eliminacja 1 niepoprawnej odpowiedzi', price: 100, item: 'oneWrong'},
    //tryby gry wizualne
    {id:10, category: 'gameMode-visual', name: 'MIX-pic', price: 500, item: 'MIX-visualMode'},
    //tryby gry tekstowe
    {id:11, category: 'gameMode-text', name: 'MIX-text', price: 500, item: 'MIX-textMode'}, 
    //postacie
    {id:12, category: 'character', name: 'Postać 1', price: 250, item: 'character1'},
    {id:13, category: 'character', name: 'Postać 2', price: 300, item: 'character2'},
    {id:14, category: 'character', name: 'Postać 3', price: 350, item: 'character3'},
    {id:15, category: 'character', name: 'Postać 4', price: 400, item: 'character4'},

]


function Shop(){
    const { points, inventory, equipItem, buyItem, setPoints, resetAppearance} = useContext(AppContext);

    const [activeCategory, setActiveCategory] = useState('background');

    //Logika filtrowania
    const filteredItems = shopItems.filter(item => item.category === activeCategory);

    //kupowanie

    const handleItemClick = (item) => {
        if(inventory.includes(item.item)) {
            equipItem(item);
            alert(`Założyłeś ${item.name}!`);
        }else{
            const result = buyItem(item);
            if (result == true) {
                alert(`Kupiłeś ${item.name}!`);
            } else {
                alert("Nie masz wystarczająco punktów lub już posiadasz ten przedmiot!");
            }
        }
    }

    return(
        <div className='game-container shop-container'>
            
            <div className='shop-header'>
                <h3>Sklep</h3>
                <p>Twoje punkty: <strong>{points}</strong></p>

                {/* ✅ POPRAWKA: Przycisk musi być TUTAJ (raz, na górze) */}
                <button className="reset-look-btn" onClick={resetAppearance}>
                    Ustaw tło początkowe 🖌️
                </button>
            </div>
            
            <div className='shop-categories'>
                {/* ... przyciski kategorii są OK ... */}
                <button onClick={() => setActiveCategory('background')}>Tło</button>
                <button onClick={() => setActiveCategory('character')}>Postać</button>
                <button onClick={() => setActiveCategory('lifeline')}>Koła ratunkowe</button>
                <button onClick={() => setActiveCategory('gameMode-visual')}>Tryby wizualne</button>
                <button onClick={() => setActiveCategory('gameMode-text')}>Tryby tekstowe</button>
            </div>

            <div className='shop-grid'>
                {filteredItems.length === 0 && <p>Brak produktów w tej kategorii.</p>}

                {filteredItems.map(item => (
                    <div key={item.id} className='shop-card'>
                        <h4>{item.name}</h4>
                        <p className='price'>Cena: {item.price} punktów</p>
                        
                        {/* ❌ STĄD USUŃ PRZYCISK RESETU (bo tu się powtarzał) */}

                        <button 
                            className='buy-btn' 
                            onClick={() => handleItemClick(item)}
                            disabled={!inventory.includes(item.item) && points < item.price}
                        >
                            {inventory.includes(item.item) ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 640">
                                    <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/>
                                </svg>
                            ) : ("KUP")}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;
