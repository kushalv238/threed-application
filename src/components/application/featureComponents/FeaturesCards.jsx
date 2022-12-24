import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCards = (props) => {
    return(
        <div className="card" title={props.featureName}>
            <FontAwesomeIcon icon={props.faIcon}/>
            <p>
                {props.featureName}
            </p>
        </div>    
    );
};

export default FeaturesCards