import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Profile() {
    const { user, points, handleLogout } = useContext(AppContext);
    const navigate = useNavigate();

    const onLogoutClick = () => {
        handleLogout();
        navigate("/");
    }

    return(
        <div className="game-container profile-screen">
            <h3>Twój profil</h3>
            <div className="profile-icon-large">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640"
                    fill="CurrentColor"
                >
                    <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/>
                </svg>
            </div>
            <div className="profile-details">
                <p>Nick: <strong>{user}</strong></p>
                <p>Punkty: <strong>{points}</strong></p>
            </div>

            <button className="logout-btn" onClick={onLogoutClick}>
                Wyloguj się
            </button>
            
        </div>
    )
}
export default Profile;