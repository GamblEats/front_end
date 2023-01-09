import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DeliveryStepper from '../components/DeliveryStepper/DeliveryStepper';
import PendingOrder from '../components/PendingOrder/PendingOrder';
import { DeliveryStep } from '../public/enums';
import Index from './index';
import { Ref } from 'preact/compat';

const Referral = () => {
    return (
        <>
            <div>Referral</div>
            <div style={{ width: '50%', margin: '10em', background: 'white', padding: '2em' }}>
                <DeliveryStepper step={DeliveryStep.IN_PREPARATION}></DeliveryStepper>
            </div>
            <div style={{ width: '30%', margin: '10em' }}>
                <PendingOrder isRestaurant={false}></PendingOrder>
                <div style={{ margin: '2em' }}></div>
                <PendingOrder isRestaurant={true}></PendingOrder>
            </div>
        </>
    );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
export default Referral;
Referral.requireAuth = true;
