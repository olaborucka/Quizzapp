import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Catalog(){
    const [filterCategory, setFilterCategory] = useState('ALL')
    const { allQuestions } = useContext(AppContext);

    // tablica kategorii
    const categories = ['ALL', ...new Set(allQuestions.map(q => q.category))]
     
    const questionss = allQuestions;
    const displayedQuestions = questionss.filter(q =>
        filterCategory === 'ALL' ? true : q.category === filterCategory
    )

    return(
        <div className="game-container" style={{maxWidth : '900px'}}>
            <h2>BAZA WIEDZY ({questionss.length})</h2>
            <div className="filter-buttons" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={filterCategory === cat ? 'active-filter' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
                {displayedQuestions.map(q => (
                    <div key={q.id} style={{ 
                        background: 'rgba(0,0,0,0.3)', 
                        padding: '15px', 
                        borderRadius: '10px',
                        border: '1px solid #555',
                        textAlign: 'left'
                    }}>
                        <div style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '5px' }}>
                            {q.type === 'visual' ? '🖼️ Obrazkowe' : '📝 Tekstowe'} | {q.category}
                        </div>
                        
                        {q.type === 'visual' && (
                            <img src={q.image} alt="podgląd" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                        )}
                        
                        <h4 style={{ margin: '10px 0', color: '#fff' }}>{q.question}</h4>
                        <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>Odp: {q.correctAnswer}</p>
                    </div>
                ))}
            </div>

        </div>
    )

}

export default Catalog