import React from 'react';

function LifelinesPanel({ inventory, onUseLifeline, isDisabled, hiddenAnswers }) {
    
    // Konfiguracja kół (musi pasować do ID ze sklepu!)
    const LIFELINES_DATA = [
        { id: 'fiftyFifty',  name: ' 50/50',    price: 300 },
        { id: 'askFriend',   name: ' Telefon',  price: 400 },
        { id: 'oneWrong',    name: ' Usuń 1',   price: 100 },
    ];

    return (
        <div className="lifelines-panel" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            
            {/* Generujemy przyciski w pętli - mniej kodu, większy porządek */}
            {LIFELINES_DATA.map(lifeline => {
                
                // Czy przycisk powinien być zablokowany?
                // Blokujemy jeśli: gra myśli (isDisabled) LUB (jeśli to koło usuwające odpowiedzi i już coś ukryto)
                const isBlocked = isDisabled || (['fiftyFifty', 'oneWrong'].includes(lifeline.id) && hiddenAnswers.length > 0);

                return (
                    <button 
                        key={lifeline.id}
                        className="lifeline-btn"
                        onClick={() => onUseLifeline(lifeline.id)}
                        disabled={isBlocked}
                        
                        style={{ 
                            padding: '8px 15px', 
                            backgroundColor: inventory.includes(lifeline.id) ? '#e67e22' : '#7f8c8d', // Pomarańczowy jak masz, szary jak kupujesz
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '20px',
                            cursor: isBlocked ? 'not-allowed' : 'pointer',
                            opacity: isBlocked ? 0.5 : 1,
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                        }}
                    >
                        {lifeline.name} 
                        <br/>
                        <small style={{ fontSize: '0.7em' }}>
                            {inventory.includes(lifeline.id) ? "(Twój)" : `(-${lifeline.price})`}
                        </small>
                    </button>
                );
            })}

        </div>
    );
}

export default LifelinesPanel;