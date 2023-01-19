import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from './styles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    return (
        <a href="/" style={{ position: 'absolute', top: '1rem', left: '1.5rem', zIndex: 99999, borderRadius: '50%' }}>
            <ButtonIcon style={{ padding: '1rem', borderRadius: '50%' }}>
                <FontAwesomeIcon color={'#e5bf00'} style={{ height: '1.5rem' }} icon={faArrowLeft} />
            </ButtonIcon>
        </a>
    );
};

export default BackButton;
