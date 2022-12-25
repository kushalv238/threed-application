import FeatureList from "../featureComponents/FeatureList";

const Panel = () => {
    return (
        <div className="panel">
            <div className="img panel-img">
                <img src='https://picsum.photos/300/200' alt='sampleImg1' title='img' />
            </div>
            <FeatureList />
        </div>
    );
};

export default Panel;