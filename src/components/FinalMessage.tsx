import { getVideo } from '../helpers/getVideo';
import { getGif } from '../helpers/getGif';

import '../styles/FinalMessage.css';

export const FinalMessage = () => {
    
    return (
        <div>
            {/* <video autoPlay loop muted>
                <source src={ getVideo(`./background_love.mp4`) } type="video/mp4" />
            </video> */}

            <h1 className='message'>¡Sabia que dirias que si! 😉</h1>

            <img src={ getGif(`./dancing_cat.gif`) } alt="dancing cat" />
        </div>
    )
}
