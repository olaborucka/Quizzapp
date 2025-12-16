import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext.js';

import Header from './components/layout/header.jsx'
import GameModes from './components/common/GameModes.jsx'
import LogBar from './components/common/login.jsx';
import VisualGame from './components/game/visual.jsx';
import TextGame from './components/game/text.jsx';  
import Shop from './pages/Shop.jsx';
import Game from './pages/Game.jsx';      
import Profile from './pages/Profile.jsx'


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
                        element={user ? <VisualGame/> : <p>Zaloguj się</p>} 
                    />

                    <Route 
                        path="/game/text" 
                        element={user ? <TextGame/> : <p>Zaloguj się</p>} 
                    />
                    <Route 
                        path="/play"
                        element={user ? <Game /> : <p>Zaloguj się</p>}
                    />
                    <Route 
                        path="/profile"
                        element={user ? <Profile /> : <p>Zaloguj się</p>}
                    />

                </Routes>
            </div>
        </Router>
    )
}

export default App;