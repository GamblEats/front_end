import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const LoaderContainer = styled.div<LoaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transform: translateY(${props => (props.onAllPage ? '-10rem' : '0')});
`;

interface Props {
    size: string;
    onAllPage?: boolean;
}
export interface LoaderProps {
    onAllPage: boolean;
}

const Loader = ({ size, onAllPage = false }: Props) => {
    return (
        <LoaderContainer onAllPage={onAllPage}>
            <FontAwesomeIcon className="loader" color="#E5BF00" fontSize={size} icon={faTicket}></FontAwesomeIcon>
        </LoaderContainer>
    );
};

export default Loader;
