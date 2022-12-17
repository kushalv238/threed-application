import './../../../stylesheets/home.css';

import Dictaphone from './speechToText/Dictaphone';

const Home = () => {
    const pageWidth = Math.floor(window.innerWidth);
    return (
        <>
            <div className='images home-img'>
                <div className="img">
                    <img src={`https://picsum.photos/${pageWidth}/220`} alt='sampleImg1' title='img1'/>
                </div>
            </div>
            <Dictaphone />
        </>
    );
}

export default Home