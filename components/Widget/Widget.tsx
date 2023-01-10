import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { WidgetContainer, WidgetHeader, WidgetOpenedContainer, WidgetTitle } from './styles';
import { useState } from 'react';

interface Props {
    icon: IconProp;
}

export interface WidgetContainerProps {
    isOpen: boolean;
    isHoverOrOpen?: boolean;
}

const Widget = ({ icon }: Props) => {
    const { t } = useTranslation('common');
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <WidgetContainer>
            <WidgetHeader
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setIsOpen(!isOpen)}
                isHoverOrOpen={isHover || isOpen}
                isOpen={isOpen}>
                <FontAwesomeIcon fontSize={'1.4rem'} color={'#143642'} icon={icon} />
                <WidgetTitle style={{ maxWidth: !isHover && !isOpen ? '' : '5rem' }}>
                    {t('arriveIn')} <br></br> 12 {t('minutes')}
                </WidgetTitle>
            </WidgetHeader>
            <WidgetOpenedContainer
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}>
                {/* <DeliveryContent></DeliveryContent> */}
            </WidgetOpenedContainer>
        </WidgetContainer>
    );
};

export default Widget;
