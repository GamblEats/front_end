import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userApi } from '../../public/const';
import { Text } from '../../styles/globals';

const NotificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

const NotificationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:focus {
        opacity: 0.7;
    }
`;

const NotificationInfos = styled.div`
    display: flex;
    gap: 0.7rem;
`;

const NotificationStatus = styled.div`
    height: 100%;
    min-width: ${props => (props.color == '#D9D9D9' ? '0.15rem' : '0.2rem')};
    background-color: ${props => props.color};
    border-radius: 1rem;
`;

const NotificationText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const NotificationsContent = () => {
    const { data: session }: any = useSession();
    const [notifications, setNotifications] = useState([]);
    async function getNotifications() {
        try {
            await axios
                .get(`${userApi}/users/${session.user.id}/notifications`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => {
                    setNotifications(resp.data);
                });
        } catch (error) {}
    }
    async function readNotification(notificationId: string) {
        try {
            await axios
                .patch(`${userApi}/users/${session.user.id}/notifications/${notificationId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    getNotifications();
                });
        } catch (error) {}
    }
    async function deleteNotification(notificationId: string) {
        try {
            await axios
                .delete(`${userApi}/users/${session.user.id}/notifications/${notificationId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    getNotifications();
                });
        } catch (error) {}
    }
    useEffect(() => {
        getNotifications();
    }, []);
    return (
        <NotificationsContainer>
            {notifications.map((notification: any) => (
                <NotificationContainer
                    key={notification.id}
                    onClick={e => {
                        e.stopPropagation();
                        readNotification(notification.id);
                    }}>
                    <NotificationInfos>
                        <NotificationStatus color={notification.isRead ? '#D9D9D9' : '#E5BF00'}></NotificationStatus>
                        <NotificationText>
                            <Text align="left" size="1rem">
                                {notification.title}
                            </Text>
                            <Text style={{ opacity: '0.7' }} align="left" size="0.8rem">
                                {notification.message}
                            </Text>
                        </NotificationText>
                    </NotificationInfos>
                    <FontAwesomeIcon
                        className="timesIcon"
                        style={{ cursor: 'pointer' }}
                        icon={faTimes}
                        onClick={e => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                        }}
                    />
                </NotificationContainer>
            ))}
        </NotificationsContainer>
    );
};

export default NotificationsContent;
