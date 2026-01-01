import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function LogBar(){
    const {user, points, handleLogin} = useContext(AppContext)
    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    
    //ukrywanie logowania
    const hiddenPaths = ['/play', '/game/visual', '/game/text'];
    if (hiddenPaths.includes(location.pathname)) {
        return null;
    }

    //logowanie
    const onEnterClick = () =>{
        if (inputValue.trim() !== ""){
            handleLogin(inputValue);
            navigate('/');
        }
    }
    //zalogowany
    if (user) {
        return(
            <nav id='navlogin' className='logged-in'>
                <span className='shop'><Link to ="/shop">Sklep</Link></span>
                <span> Witaj, <strong>{user}</strong>!</span>
                <span className="points">💰 {points} pkt</span>

            </nav>
        )
    }

    // nie zalogowany
    return(
        <nav id='navlogin'>
            <div>
                <input 
                    type="text"
                    name='login' 
                    id='login' 
                    placeholder='podaj nick'
                    value={inputValue} 
                    onChange={(e)=> setInputValue(e.target.value)}
                />
            </div>
            <button onClick={onEnterClick}>Wchodzę!</button>
        </nav>
    )
}

export default LogBar