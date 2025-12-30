import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function AddQuestion() {
    // 1. Pobieramy funkcję z Contextu
    const { addQuestion } = useContext(AppContext);
    const navigate = useNavigate();

    // 2. Stan formularza
    const [formData, setFormData] = useState({
        type: 'text', // Domyślna wartość (nie 'text/visual')
        category: 'Inne',
        question: '',
        difficulty: 'user', // Oznaczamy jako dodane przez użytkownika
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
        image: ''
    });

    // 3. Obsługa pisania w polach
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 4. Wysyłanie formularza
    const handleSubmit = (e) => {
        e.preventDefault();

        // Najpierw tworzymy tablicę odpowiedzi
        const allAnswers = [
            formData.correctAnswer,
            formData.wrongAnswer1,
            formData.wrongAnswer2,
            formData.wrongAnswer3
        ];

        // Mieszamy odpowiedzi (sortujemy tablicę, a nie cały obiekt!)
        const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

        // Tworzymy finalny obiekt pytania
        const newQuestion = {
            // id: Date.now(), // AppContext to doda sam, ale nie zaszkodzi
            type: formData.type,
            category: formData.category,
            question: formData.question,
            image: formData.type === 'visual' ? formData.image : null,
            answers: shuffledAnswers,
            correctAnswer: formData.correctAnswer,
            difficulty: 'user'
        };

        // Wysyłamy do bazy
        addQuestion(newQuestion);
        
        // Wracamy do katalogu
        navigate('/catalog'); 
    };

    return (
        <div className="game-container" style={{maxWidth: '600px'}}>
            <h2>DODAJ WŁASNE PYTANIE!</h2>
            
            {/* WAŻNE: Formularz obejmuje wszystkie inputy i przycisk */}
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left'}}>

                {/* Sekcja wyboru typu i kategorii */}
                <div style={{display: 'flex', gap: '10px'}}>
                    <div style={{flex: 1}}>
                        <label>Typ pytania:</label>
                        <select name="type" value={formData.type} onChange={handleChange} style={{width: '100%', padding: '10px', marginTop: '5px'}}>
                            <option value="text">Tekstowe</option>
                            <option value="visual">Obrazkowe</option>
                        </select>
                    </div>
                    <div style={{flex: 1}}>
                        <label>Kategoria:</label>
                        <select name="category" value={formData.category} onChange={handleChange} style={{width: '100%', padding: '10px', marginTop: '5px'}}>
                            {formData.type === 'visual' && (
                                <>
                                    <option value="Inne">Inne</option>
                                    <option value="Geografia">Geografia</option>
                                    <option value="Biologia">Biologia</option>
                                    <option value="Kultura i Sztuka">Kultura i Sztuka</option>
                                    <option value="Technologia i Motoryzacja">Technologia</option>
                                    <option value="Jedzenie i Przedmioty">Jedzenie</option>
                                </>
                            )}
                            {formData.type === 'text' && (
                                <>
                                    <option value="Inne">Inne</option>,
                                    <option value="Geografia">Geografia</option>,
                                    <option value="Nauka">Nauka</option>,
                                    <option value="Kultura">Kultura</option>,
                                    <option value="Informatyka">Informatyka</option>,
                                    <option value="Historia">Historia</option>
                                </>
                                
                            )}
                        </select>
                    </div>
                </div>

                {/* Pole na obrazek (tylko jeśli wybrano typ visual) */}
                {formData.type === 'visual' && (
                    <div className="form-group">
                        <label>Link do obrazka (URL):</label>
                        <input 
                            type="text" 
                            name="image" 
                            value={formData.image} 
                            onChange={handleChange} 
                            placeholder="https://przyklad.com/obrazek.jpg"
                            style={{width: '100%', padding: '10px'}}
                        />
                    </div>
                )}

                {/* Treść pytania */}
                <div className="form-group">
                    <label>Treść pytania:</label>
                    <input 
                        type="text" 
                        name="question" 
                        value={formData.question} 
                        onChange={handleChange}
                        required 
                        style={{width: '100%', padding: '10px'}}
                    />
                </div>

                {/* Sekcja odpowiedzi */}
                <div style={{border: '1px solid #555', padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(0,0,0,0.2)'}}>
                    <label style={{color: '#2ecc71', fontWeight: 'bold'}}>Poprawna odpowiedź:</label>
                    <input 
                        type="text" 
                        name="correctAnswer" 
                        value={formData.correctAnswer} 
                        onChange={handleChange} 
                        required 
                        style={{width: '100%', padding: '10px', marginBottom: '10px', border: '2px solid #2ecc71'}} 
                    />

                    <label>Złe odpowiedzi (dla zmyłki):</label>
                    <input type="text" name="wrongAnswer1" placeholder="Zła odp 1" value={formData.wrongAnswer1} onChange={handleChange} required style={{width: '100%', padding: '8px', marginBottom: '5px'}} />
                    <input type="text" name="wrongAnswer2" placeholder="Zła odp 2" value={formData.wrongAnswer2} onChange={handleChange} required style={{width: '100%', padding: '8px', marginBottom: '5px'}} />
                    <input type="text" name="wrongAnswer3" placeholder="Zła odp 3" value={formData.wrongAnswer3} onChange={handleChange} required style={{width: '100%', padding: '8px'}} />
                </div>

                <button type="submit" style={{padding: '15px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold'}}>
                    DODAJ DO GRY 💾
                </button>

            </form>
        </div>
    );
}

export default AddQuestion;