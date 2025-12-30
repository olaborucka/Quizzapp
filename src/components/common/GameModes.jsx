import { Link } from 'react-router-dom';

function GameModes(){
    return(
        <nav >
            <ul className='game-menu'>
                <li><Link to="/game/visual">PicQuiz</Link></li>
                <li><Link to="/game/text">Text Quiz</Link></li>
                <li style={{ width: '100%', height: 0, margin: 0 }}></li>
                <li>
                    <Link to="/leaderboard" className="leaderboard-link" style={{ marginRight: '15px' }}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 640 640" 
                            fill="gold" // Złoty kolor pucharu!
                            width="35" 
                            height="30"
                        >
                            <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63.1-142.3zM400 64c-16.7 0-32.1 8.9-40.5 23.3c-2.3 4-7.4 5.3-11.2 2.9c-10.2-6.5-22.1-9.9-34.3-9.9H262c-12.2 0-24.1 3.4-34.3 9.9c-3.9 2.5-9 1.1-11.2-2.9C208.1 72.9 192.7 64 176 64c-11.9 0-22.5 4.7-30.4 12.3L144.9 80H431.1l-.6-3.7C422.5 68.7 411.9 64 400 64zM442.7 302.6c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63.1 142.3c-22.4 21.8-48.3 37.3-73.2 48.3z"/>
                        </svg>
                        Tablica Wyników
                    </Link>
                </li>
                <li>  
                <Link to="/catalog" className="catalog" style={{ marginRight: '15px' }}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 640"
                        fill= "purple"
                        width= "30"
                        height= "30"                        
                    >
                        <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z"/>
                    </svg> 
                    Baza Pytań

                </Link>
                </li>
                <li>
                    <Link to="/add-question">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640"
                    fill='pink'
                    width= "30"
                        height= "30"
                    >
                    
                        <path d="M128.1 64C92.8 64 64.1 92.7 64.1 128L64.1 512C64.1 547.3 92.8 576 128.1 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L448 332.1L448 234.6C448 217.6 441.3 201.3 429.3 189.3L322.8 82.7C310.8 70.7 294.5 64 277.6 64L128.1 64zM389.6 240L296.1 240C282.8 240 272.1 229.3 272.1 216L272.1 122.5L389.6 240zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/>
                    </svg>
                       Kreator Pytań
                    </Link>
                </li>
                <li style={{ marginTop: '20px' }}>
                    <button 
                        onClick={() => {
                            // Generuje link np. http://localhost:3000/challenge?type=visual
                            const link = `${window.location.origin}/challenge?type=visual&category=MIX`;
                            navigator.clipboard.writeText(link);
                            alert("Skopiowano link do wyzwania! Wyślij go znajomemu.");
                        }}
                        style={{
                            padding: '15px 30px', borderRadius: '50px', border: 'none',
                            background: '#6c5ce7', color: 'white', fontWeight: 'bold', cursor: 'pointer',
                            width: '100%', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        🔗 Udostępnij Wyzwanie
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default GameModes