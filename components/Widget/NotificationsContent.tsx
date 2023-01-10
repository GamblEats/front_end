import { useTranslation } from 'next-i18next';

const NotificationsContent = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div>Notifications</div>
        </>
    );
};

export default NotificationsContent;
