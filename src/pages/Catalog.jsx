import { useState } from "react";
import { questions } from "../data/data";

function Catalog(){
    const [filterCategory, setFilterCategory] = useState('ALL')

    const categories = ['ALL', ...new Set(questions.map(q => q.category))]

    const displayedQuestions = questions.filter(q =>
        filterCategory === 'ALL' ? true : q.category === filterCategory
    )

    return(
        <div className="game-container" style={{maxWidth : '900px'}}>
            <h2>BAZA WIEDZY ({questions.length})</h2>
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
                
            </div>

        </div>
    )

}