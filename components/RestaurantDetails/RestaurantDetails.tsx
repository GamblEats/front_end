import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { use } from 'i18next';
import styled from 'styled-components';
import useStore from '../../store/useStore';

const BlurBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    display: flex;
    height: 100%;
    cursor: default;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(10px);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: opacity 0.15s ease-in-out;
`;

const Details = styled.div`
    position: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f2f2;
    width: 85%;
    height: 85%;
    z-index: 21;
    border-radius: 1em;
    display: flex;
    flex-direction: row;
`;

const RestInfo = styled.div`
    background-color: white;
    width: 20%;
    height: 100%;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;

const RestaurantDetails = () => {
    const { openedRestaurant, setOpenedRestaurant, loading, error }: any = useStore(state => state);
    console.log(openedRestaurant);
    return (
        <BlurBg
            onClick={e => {
                e.stopPropagation();
                setOpenedRestaurant(null);
            }}>
            {!loading && !error && openedRestaurant && (
                <Details
                    onClick={e => {
                        e.stopPropagation();
                    }}>
                    <RestInfo></RestInfo>
                </Details>
            )}
        </BlurBg>
    );
};

export default RestaurantDetails;
