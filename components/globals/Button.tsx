import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer, ButtonIcon, ButtonLabel } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    text: string;
    textColor?: string;
    small?: boolean;
    backgroundColor?: string;
    icon?: IconProp;
    onClick: () => void;
}

export interface SmallProps {
    small?: boolean;
    textColor?: string;
}

const Button = ({ backgroundColor, text, textColor, small, icon, onClick }: Props) => {
    return (
        <ButtonContainer color={backgroundColor} small={small} onClick={onClick}>
            <ButtonLabel
                color={textColor ? textColor : backgroundColor ? '#f2f2f2' : '#143642'}
                small={small}
                textColor={textColor}>
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
