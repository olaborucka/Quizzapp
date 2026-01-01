import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function AddQuestion() {
    const { addQuestion } = useContext(AppContext);
    const navigate = useNavigate();
     
    // stan formularza 1 obiekt 
    const [formData, setFormData] = useState({
        type: 'text',
        category: 'Inne',
        question: '',
        difficulty: 'user',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
        image: ''
    });

    // obsluga zmian
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // wysyłanie 
    const handleSubmit = (e) => {
        e.preventDefault();

        const allAnswers = [
            formData.correctAnswer,
            formData.wrongAnswer1,
            formData.wrongAnswer2,
            formData.wrongAnswer3
        ];

        const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

        const newQuestion = {
            type: formData.type,
            category: formData.category,
            question: formData.question,
            image: formData.type === 'visual' ? formData.image : null,
            answers: shuffledAnswers,
            correctAnswer: formData.correctAnswer,
            difficulty: 'user'
        };

        addQuestion(newQuestion);
        navigate('/catalog'); 
    };

    return (
        <div className="game-container" style={{maxWidth: '700px'}}>
            <h2>DODAJ WŁASNE PYTANIE!</h2>
            
            <form onSubmit={handleSubmit} className="add-question-form">

                <div className="form-row">
                    <div className="form-group">
                        <label>Typ pytania:</label>
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="text">Tekstowe</option>
                            <option value="visual">Obrazkowe</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Kategoria:</label>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            {formData.type === 'visual' ? (
                                <>
                                    <option value="Inne">Inne</option>
                                    <option value="Geografia">Geografia</option>
                                    <option value="Biologia">Biologia</option>
                                    <option value="Kultura i Sztuka">Kultura i Sztuka</option>
                                    <option value="Technologia i Motoryzacja">Technologia</option>
                                    <option value="Jedzenie i Przedmioty">Jedzenie</option>
                                </>
                            ) : (
                                <>
                                    <option value="Inne">Inne</option>
                                    <option value="Geografia">Geografia</option>
                                    <option value="Nauka">Nauka</option>
                                    <option value="Kultura">Kultura</option>
                                    <option value="Informatyka">Informatyka</option>
                                    <option value="Historia">Historia</option>
                                </>
                            )}
                        </select>
                    </div>
                </div>

                {formData.type === 'visual' && (
                    <div className="form-group">
                        <label>Link do obrazka (URL):</label>
                        <input 
                            type="text" 
                            name="image" 
                            value={formData.image} 
                            onChange={handleChange} 
                            placeholder="https://..."
                        />
                    </div>
                )}

                <div className="form-group">
                    <label>Treść pytania:</label>
                    <input 
                        type="text" 
                        name="question" 
                        value={formData.question} 
                        onChange={handleChange}
                        required 
                        placeholder="Np. W którym roku..."
                    />
                </div>
                <div className="wrong-answers-box">
                    <div className="form-group correct-answer">
                        <label>Poprawna odpowiedź:</label>
                        <input 
                            type="text" 
                            name="correctAnswer" 
                            value={formData.correctAnswer} 
                            onChange={handleChange} 
                            required 
                            placeholder="Wpisz dobrą odpowiedź"
                        />
                    </div>

                    <div className="form-group">
                        <label>Złe odpowiedzi (dla zmyłki):</label>
                        <input type="text" name="wrongAnswer1" placeholder="Zła odp 1" value={formData.wrongAnswer1} onChange={handleChange} required />
                        <input type="text" name="wrongAnswer2" placeholder="Zła odp 2" value={formData.wrongAnswer2} onChange={handleChange} required />
                        <input type="text" name="wrongAnswer3" placeholder="Zła odp 3" value={formData.wrongAnswer3} onChange={handleChange} required />
                    </div>
                </div>

                <button type="submit" className="submit-btn">
                    DODAJ DO GRY 💾
                </button>

            </form>
        </div>
    );
}

export default AddQuestion;