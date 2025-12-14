import { Link } from 'react-router-dom';

function GameModes(){
    return(
        <nav >
            <ul className='game-menu'>
                <li><Link to="/game/visual">PicQuiz</Link></li>
                <li><Link to="/game/text">Text Quiz</Link></li>
            </ul>
        </nav>
    )
}

export default GameModes