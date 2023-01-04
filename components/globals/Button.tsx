import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer, ButtonIcon, ButtonLabel } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    color: string;
    text: string;
    icon: IconProp;
    onClick: () => void;
}

const AccountCard = ({ color, text, icon, onClick }: Props) => {
    return (
        <ButtonContainer color={color} onClick={onClick}>
            <ButtonLabel>{text}</ButtonLabel>
            <ButtonIcon>
                <FontAwesomeIcon icon={icon} />
            </ButtonIcon>
        </ButtonContainer>
    );
};

export default AccountCard;
