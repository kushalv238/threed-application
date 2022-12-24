import './../../../stylesheets/home.css';

import Dictaphone from './speechToText/Dictaphone';

const Home = (props) => {
    const pageWidth = Math.floor(window.innerWidth);

    function sendMessage(message) {
        console.log(message)
    }

    return (
        <div
            className={`homePage${props.panelActive ? ' overlay' : ''}`}
            onClick={()=>props.isPanelActive(false)}
        >
            <div className='images home-img'>
                <div className="img">
                    <img src={`https://picsum.photos/${pageWidth}/220`} alt='sampleImg1' title='img1'/>
                </div>
            </div>
            <Dictaphone getMessage = {(message) => sendMessage(message)}/>
        </div>
    );
};

export default Home;