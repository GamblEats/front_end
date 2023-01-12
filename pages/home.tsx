import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageContainer, SectionContainer, SectionLine, SectionTitle } from '../styles/globals';
import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
import PageHeader from '../components/globals/PageHeader';
import useStore from '../store/useStore';

const ScrollContainer = styled.div<ScrollContainerProps>`
    display: flex;
    justify-content: space-between;
    gap: ${props => props.gap || '1.5rem'};
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 1080px) {
        padding: -5rem 0;
    }
`;

const News = styled.div<NewsProps>`
    background-color: ${props => props.color};
    opacity: 0.7;
    width: 100%;
    min-width: 25rem;
    border-radius: 1.4rem;
    display: flex;
    align-items: center;
    flex-direction: ${props => props.flexDirection || 'row'};
    gap: ${props => (props.flexDirection ? '0.3rem' : '2rem')};
    padding: 1.7rem 2rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }
`;

const NewsText = styled.div<NewsTextProps>`
    color: #f2f2f2;
    font-size: ${props => props.fontSize};
`;

interface ScrollContainerProps {
    gap?: string;
}
interface NewsProps {
    flexDirection?: string;
}
interface NewsTextProps {
    fontSize: string;
}

const Home = () => {
    const handleSignOut = () => {
        signOut();
    };
    const { data: session }: any = useSession();
    const { t } = useTranslation('common');
    const router = useRouter();
    console.log(session);
    function getGreeting() {
        const date = new Date();
        const hours = date.getHours();

        if (hours >= 0 && hours < 12) {
            return t('goodMorning');
        } else if (hours >= 12 && hours < 18) {
            return t('goodAfternoon');
        } else {
            return t('goodEvening');
        }
    }
    const { restaurants, getRestaurants } = useStore();
    if (restaurants.length === 0) {
        getRestaurants();
    }

    return (
        <PageContainer>
            <PageHeader title={getGreeting() + session.user.firstName}></PageHeader>
            <ScrollContainer gap="2rem">
                <News color="#E5BF00" onClick={() => router.push('/referral')}>
                    <FontAwesomeIcon
                        style={{ transform: 'rotate(-60deg)' }}
                        fontSize="3.2rem"
                        color="#fefefe"
                        icon={faTicketSimple}></FontAwesomeIcon>
                    <NewsText fontSize="1.1em">{t('sponsorNews')}</NewsText>
                </News>
                <News color="#E74C3C" flexDirection="column">
                    <NewsText fontSize="2em">{t('offerNews')}</NewsText>
                    <NewsText fontSize="0.9em">{t('certainsMenu')}</NewsText>
                </News>
                <News color="#333C85">
                    <FontAwesomeIcon fontSize="4rem" color="#fefefe" icon={faFutbol}></FontAwesomeIcon>
                    <NewsText fontSize="1.1rem">{t('worldCupNews')}</NewsText>
                </News>
            </ScrollContainer>
            <SectionContainer>
                <SectionTitle>{t('favorites')}</SectionTitle>
                <SectionLine></SectionLine>
            </SectionContainer>
            <ScrollContainer>
                {restaurants.map((r, i) => (
                    <RestaurantCard
                        key={i}
                        id={r.id}
                        name={r.name}
                        pic={r.pic}
                        deliveryPrice={r.deliveryPrice}
                        description={r.description}
                        deliveryTime={r.deliveryTime}
                        rating={r.rating}
                        minWidth="25rem"></RestaurantCard>
                ))}
            </ScrollContainer>
            <SectionContainer>
                <SectionTitle>{t('fasterDelivery')}</SectionTitle>
                <SectionLine></SectionLine>
            </SectionContainer>
            <ScrollContainer>
                {restaurants.map((r, i) => (
                    <RestaurantCard
                        key={i}
                        id={r.id}
                        name={r.name}
                        pic={r.pic}
                        deliveryPrice={r.deliveryPrice}
                        description={r.description}
                        deliveryTime={r.deliveryTime}
                        rating={r.rating}
                        minWidth="25rem"></RestaurantCard>
                ))}
            </ScrollContainer>
        </PageContainer>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
export default Home;
Home.requireAuth = true;
