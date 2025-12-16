import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to="/" className="home-link">
                <svg 
                    className='home-icon'
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640"
                    >
                    <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/>
                </svg>
            </Link>
                <h1>QuizMania</h1>
            <Link to="/profile" className="profile-link">
                <svg 
                    className="profile-icon" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                >
                    <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/>
                </svg>
            </Link>
        </header>
    )
}

export default Header;