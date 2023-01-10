import { useTranslation } from 'next-i18next';

const BasketContent = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div>Basket</div>
        </>
    );
};

export default BasketContent;
