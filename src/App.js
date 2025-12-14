import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext.js';

import Header from './components/layout/header.jsx'
import GameModes from './components/common/GameModes.jsx'
import LogBar from './components/common/login.jsx';
import textGame from './components/game/text.jsx';
import visualGame from './components/game/visual.jsx';
import Shop from './pages/Shop.jsx';


function App() {
    const { user } = useContext(AppContext)
    return (
        <Router>
            <div className="app">
                {user ? (
                    <Header />
                ) : (
                    <img 
                        src="/images/quizLogo.png" 
                        alt="Logo Quizu" 
                        className="main-logo" 
                    />
                )}
                
                <LogBar/>
                
                <Routes>
                    <Route path="/" element={user ? <GameModes /> : <p>Proszę się zalogować!</p>} />
                    <Route path="/shop" element={user ? <Shop /> : <p>Zaloguj się</p>} />
                    <Route 
                        path="/game/visual" 
                        element={user ? <visualGame/> : <p>Zaloguj się</p>} 
                    />

                    <Route 
                        path="/game/text" 
                        element={user ? <textGame/> : <p>Zaloguj się</p>} 
                    />

                </Routes>
            </div>
        </Router>
    )
}

export default App;