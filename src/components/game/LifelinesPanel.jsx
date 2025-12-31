
function LifelinesPanel({ inventory, onUseLifeline, isDisabled, hiddenAnswers, gameType }) {
    
    const LIFELINES_DATA = [
        { id: 'fiftyFifty',  name: ' 50/50',    price: 300 },
        { id: 'askFriend',   name: ' Telefon',  price: 400 },
        { id: 'oneWrong',    name: ' Usuń 1',   price: 100 },
        { id: 'reveal',      name: ' Odsłoń',   price: 200 },
    ];

    return (
        <div className="lifelines-panel" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            
            {LIFELINES_DATA.map(lifeline => {
                if (lifeline.id === 'reveal' && gameType !== 'visual'){
                    return null
                }
                const isRevealed = hiddenAnswers.includes('REVEALED')
                const isBlocked = isDisabled || 
                (['fiftyFifty', 'oneWrong'].includes(lifeline.id) && hiddenAnswers.length > 0) ||
                (lifeline.id === 'reveal' && isRevealed);

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