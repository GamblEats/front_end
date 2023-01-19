import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

interface Props {
    size: string;
}

const Loader = ({ size }: Props) => {
    return (
        <LoaderContainer>
            <FontAwesomeIcon className="loader" color="#E5BF00" fontSize={size} icon={faTicket}></FontAwesomeIcon>
        </LoaderContainer>
    );
};

export default Loader;
