import styled from 'styled-components';

export const Card = styled.div`
    background-color: #fafafa;
    color: #143642;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    overflow: hidden;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const CardPicture = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 10rem;
    height: 10rem;
    border-radius: 15px;
    margin: 0;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    padding: 0 1rem;
    width: 100%;
`;

export const CardTitle = styled.h3`
    font-family: 'Montserrat';
    font-weight: 600;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 29px;
    margin-right: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

export const CardDetailsContainer = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;

    height: 35px;
`;

export const CardDeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    white-space: nowrap;
`;

export const CardDeliveryDetail = styled.span`
    height: 17px;

    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #d9d9d9;
`;

export const CardRating = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px;
    gap: 10px;
    color: #f2f2f2;

    width: 35px;
    height: 35px;

    /* Secondary */

    background: #e6bf00;
    border-radius: 60px;
`;
