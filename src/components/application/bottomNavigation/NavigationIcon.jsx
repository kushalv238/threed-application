import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationIcon = (props) => {
    return (
        <div className='nav-icons'>
            <div
                className={props.pageId === props.activePage ? `selected${props.prevPage > props.pageId ? ' moveLeft' : ''}${props.prevPage < props.pageId ? ' moveRight' : ''}` : undefined}
                onClick={() => props.onPageChange(props.pageId)}
                title={props.title}
            >
                <FontAwesomeIcon icon={props.icon} />
                <p className={`hidden ${props.pageId === props.activePage && 'active'}`}>{props.title}</p>
            </div>
        </div>
    );
}

export default NavigationIcon