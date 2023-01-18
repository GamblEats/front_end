import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer, ButtonIcon, ButtonLabel } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    text: string;
    small?: boolean;
    backgroundColor?: string;
    icon?: IconProp;
    onClick: () => void;
}

export interface SmallProps {
    small?: boolean;
}

const Button = ({ backgroundColor, text, small, icon, onClick }: Props) => {
    return (
        <ButtonContainer color={backgroundColor} small={small} onClick={onClick}>
            <ButtonLabel color={backgroundColor ? '#f2f2f2' : '#143642'} small={small}>
                {text}
            </ButtonLabel>
            {icon && (
                <ButtonIcon small={small}>
                    <FontAwesomeIcon color={backgroundColor ? '#f2f2f2' : '#143642'} icon={icon} />
                </ButtonIcon>
            )}
        </ButtonContainer>
    );
};

export default Button;
