import FeaturesCards from "./FeaturesCards";
import { faCloud, faNewspaper, faInfoCircle, faLaugh, faMusic, faCalendar, faStopwatch, faList, faCompass, faMap, faPhone, faCoins, faGear, faMessage } from "@fortawesome/free-solid-svg-icons";

const featureList = (props) => {
    return (
        <div className={`features ${props.page ==="featurePage" ? ' featuresPageList' : undefined} `}>
            <p>Features</p>
            <div className="featuresList">
                <FeaturesCards featureName="Settings" faIcon = {faGear} />
                <FeaturesCards featureName="Weather" faIcon = {faCloud} />
                <FeaturesCards featureName="News" faIcon = {faNewspaper} />
                <FeaturesCards featureName="Informantion" faIcon = {faInfoCircle} />
                <FeaturesCards featureName="Social Media" faIcon = {faMessage} />
                <FeaturesCards featureName="Maps" faIcon = {faMap} />
                <FeaturesCards featureName="Call" faIcon = {faPhone} />
                <FeaturesCards featureName="Music" faIcon = {faMusic} />
                <FeaturesCards featureName="Jokes" faIcon = {faLaugh} />
                <FeaturesCards featureName="Date" faIcon = {faCalendar} />
                <FeaturesCards featureName="Time" faIcon = {faStopwatch} />
                <FeaturesCards featureName="Remainder" faIcon = {faList} />
                <FeaturesCards featureName="Direction" faIcon = {faCompass} />
                <FeaturesCards featureName="Donate" faIcon = {faCoins} />
            </div>
        </div>
    );
};

export default featureList;