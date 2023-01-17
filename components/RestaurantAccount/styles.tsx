import styled from 'styled-components';

export const AccountWrapper = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    width: 40%;
    background: white;
    height: 100%;
    border-radius: 20px;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const RestaurantImg = styled.img`
    object-fit: cover;
    border-radius: 20px;

    height: 14rem;
    width: 100%;
`;

export const InfoWrapper = styled.div`
    padding: 1rem;
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.h2`
    color: #143642;
    margin: 0 auto 1rem;
`;

export const InfoDetails = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin: 1rem 0.8rem;

    line-height: 1.28;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 11;
    text-overflow: ellipsis;
    overflow: hidden;
`;
