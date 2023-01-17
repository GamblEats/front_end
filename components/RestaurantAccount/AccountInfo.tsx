import React from 'react';
import {
    DetailContainer,
    DetailsWrapper,
    InfoContainer,
    InfoDetails,
    InfoTitle,
    InfoWrapper,
    RestaurantImg,
} from './styles';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { restaurantApi } from '../../public/const';
import { faLocationDot, faBicycle, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccountInfo = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const [restaurantInfo, setRestaurantInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const isInitialMount = useRef(true);

    async function getRestaurant() {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log(session);

            await axios.get(`${restaurantApi}/restaurants/${session.user.restaurantId}`).then(resp => {
                setRestaurantInfo(resp.data);
                setLoading(false);
            });
        }
    }
    useEffect(() => {
        getRestaurant();
    }, []);

    return (
        <InfoContainer>
            {' '}
            {!loading && (
                <React.Fragment>
                    {' '}
                    <RestaurantImg src={restaurantInfo.pic} />
                    <InfoWrapper>
                        <InfoTitle>{restaurantInfo.name}</InfoTitle>
                        <InfoDetails>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                style={{ width: '1rem', color: '#143642', marginRight: '0.8rem' }}
                            />
                            {restaurantInfo.address}
                        </InfoDetails>
                        <InfoDetails>
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{ width: '1rem', color: '#143642', marginRight: '0.8rem' }}
                            />
                            10h00 - 14h00 / 18h00 - 22h00
                        </InfoDetails>

                        <InfoDetails>
                            <FontAwesomeIcon
                                icon={faBicycle}
                                style={{ width: '1rem', color: '#143642', marginRight: '0.8rem' }}
                            />
                            {restaurantInfo.deliveryPrice} €
                        </InfoDetails>
                        <InfoDetails style={{ fontWeight: 500, height: '14rem' }}>
                            {restaurantInfo.description}
                        </InfoDetails>
                    </InfoWrapper>
                </React.Fragment>
            )}
        </InfoContainer>
    );
};

export default AccountInfo;
