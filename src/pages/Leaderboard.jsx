import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useMemo } from "react";


function Leaderboard() {
    const { highScores } = useContext(AppContext);
    const [filter, setFilter] = useState('ALL');

    const filteredScores = useMemo(() => {
        return highScores
            .filter(entry => filter === 'ALL' ? true : entry.category === filter)
            .sort((a,b) => b.points - a.points)
    }, [highScores, filter])
    const allCategories = highScores.map(entry => entry.category);
    const uniqueCategories = ['ALL', ...new Set(allCategories)];

    const sortedScores = filteredScores.sort((a, b) => b.points - a.points);
    
    return (
        <div className="leaderboard-container">
            <h2>Tablica Wyników 🏆</h2>
            
            <div className="filter-buttons">
                {uniqueCategories.map((categoryName) => (
                    <button 
                        key={categoryName} 
                        onClick={() => setFilter(categoryName)}
                        className={filter === categoryName ? 'active-filter' : ''}
                    >
                        {categoryName === 'ALL' ? 'Wszystkie' : categoryName}
                    </button>
                ))}
            </div>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Typ</th>
                        <th>Miejsce</th>
                        <th>Gracz</th>
                        <th>Punkty</th>
                        <th>Kategoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {sortedScores.map((entry, index) => (
                        <tr key={index}> 
                            <td>{entry.type}</td>
                            <td>{index + 1}</td>
                            <td>{entry.user}</td>
                            <td><strong>{entry.points}</strong></td>
                            <td>{entry.category}</td>
                            <td>{entry.date || '-'}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default Leaderboard;