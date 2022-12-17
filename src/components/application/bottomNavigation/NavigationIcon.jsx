import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationIcon = (props) => {
    return (
        <div className='nav-icons'>
            <div
                className={props.page === props.Page ? `selected` : undefined}
                onClick={() => props.onPageChange(props.Page)}
                title={props.title}
            >
                <FontAwesomeIcon icon={props.icon} />
                {props.page === props.Page && <span>{props.title}</span>}                    
            </div>
        </div>
    );
}

export default NavigationIcon