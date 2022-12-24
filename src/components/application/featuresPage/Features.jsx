import './../../../stylesheets/features.css';
import FeatureList from "../featureComponents/FeatureList";


const Features = (props) => {
    return (
        <div
            className={`featuresPage${props.panelActive ? ' overlay' : ''}`}
            onClick={()=>props.isPanelActive(false)}
        >
            <FeatureList page="featurePage" />
        </div>
    );
};

export default Features;