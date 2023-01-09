import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer, ButtonIcon, ButtonLabel } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    text: string;
    backgroundColor?: string;
    icon?: IconProp;
    onClick: () => void;
}

const AccountCard = ({ backgroundColor, text, icon, onClick }: Props) => {
    return (
        <ButtonContainer color={backgroundColor} onClick={onClick}>
            <ButtonLabel color={backgroundColor ? '#f2f2f2' : '#143642'}>{text}</ButtonLabel>
            {icon && (
                <ButtonIcon>
                    <FontAwesomeIcon color={backgroundColor ? '#f2f2f2' : '#143642'} icon={icon} />
                </ButtonIcon>
            )}
        </ButtonContainer>
    );
};

export default AccountCard;
