import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import {
    NotificationCounter,
    NotificationIconContainer,
    WidgetContainer,
    WidgetHeader,
    WidgetOpenedContainer,
    WidgetTitle,
} from './styles';
import { useEffect, useState } from 'react';
import { faBasketShopping, faBell, faBox } from '@fortawesome/free-solid-svg-icons';
import NotificationsContent from './NotificationsContent';
import DeliveryContent from './DeliveryContent';
import BasketContent from './BasketContent';
import axios from 'axios';
import { userApi } from '../../public/const';
import { useSession } from 'next-auth/react';
import { Text } from '../../styles/globals';

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
    const { data: session }: any = useSession();
    const [notificationsCount, setNotificationsCount] = useState([]);
    async function getNotificationsCount() {
        try {
            await axios
                .get(`${userApi}/users/${session.user.id}/notifications`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => {
                    setNotificationsCount(resp.data.filter((notif: any) => !notif.isRead).length);
                });
        } catch (error) {}
    }
    useEffect(() => {
        getNotificationsCount();
    }, []);
    return (
        <WidgetContainer>
            <WidgetHeader
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => {
                    setIsOpen(!isOpen);
                    getNotificationsCount();
                }}
                isHoverOrOpen={isHover || isOpen}
                isOpen={isOpen}>
                {icon != faBell && <FontAwesomeIcon fontSize={'1.4rem'} color={'#143642'} icon={icon} />}
                {icon == faBell && (
                    <NotificationIconContainer>
                        <NotificationCounter>
                            <Text size="0.6rem" weight="700" color="white">
                                {notificationsCount}
                            </Text>
                        </NotificationCounter>
                        <FontAwesomeIcon fontSize={'1.4rem'} color={'#143642'} icon={icon} />
                    </NotificationIconContainer>
                )}
                <WidgetTitle style={{ maxWidth: !isHover && !isOpen ? '' : '5.5rem' }}>
                    {icon == faBox && (
                        <div>
                            {t('arriveIn')} <br></br> 12 {t('minutes')}
                        </div>
                    )}
                    {icon == faBell && (
                        <div>
                            {notificationsCount} unread <br></br> notifications
                        </div>
                    )}
                </WidgetTitle>
            </WidgetHeader>
            <WidgetOpenedContainer
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={e => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                    getNotificationsCount();
                }}
                isOpen={isOpen}>
                {icon === faBell && <NotificationsContent></NotificationsContent>}
                {icon === faBox && <DeliveryContent></DeliveryContent>}
                {icon === faBasketShopping && <BasketContent></BasketContent>}
            </WidgetOpenedContainer>
        </WidgetContainer>
    );
};

export default Widget;
