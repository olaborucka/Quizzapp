import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Challenge() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Pobieramy parametry z linku (np. ?type=visual&category=Biologia)
        const type = searchParams.get("type");
        const category = searchParams.get("category");

        if (type) {
            // Przekierowujemy do gry z tymi ustawieniami
            navigate("/play", { 
                state: { 
                    type: type, 
                    category: category || 'MIX' 
                } 
            });
        } else {
            navigate("/");
        }
    }, [navigate, searchParams]);

    return (
        <div className="game-container loading-screen">
            <p>Ładowanie wyzwania... 🚀</p>
        </div>
    );
}

export default Challenge;