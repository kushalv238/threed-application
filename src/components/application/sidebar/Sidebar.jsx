import './../../../stylesheets/sidebar.css';

import Panel from './Panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    return (
        <>
            {
                props.panelActive && <Panel />
            }
            <div
                className='hamburger'
                onClick={() => props.isPanelActive(!props.panelActive)}
            >
                <FontAwesomeIcon icon={props.panelActive ? faX : faBars}/>
            </div>
        </>
    );
};

export default Sidebar;