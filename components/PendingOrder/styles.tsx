import styled from 'styled-components';

export const OrderContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    background-color: white;
    padding: 0.6em;
    border-radius: 1.4em;
`;

export const InfoContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    padding: 0.5em;
`;

export const DeliveryInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const DeliveryInfoContainer = styled.div`
    display: flex;
    gap: 0.5em;
`;
export const InfoValue = styled.div`
    font-size: 0.9em;
    color: #143642;
`;

export const OrderPrice = styled.div`
    font-size: 1.8em;
    font-weight: 600;
    color: #143642;
`;
export const OrderReference = styled.div`
    font-size: 0.7em;
    color: #143642;
`;
export const UserAddress = styled.div`
    font-size: 0.8em;
    max-width: 8em;
`;

export const AddressesPipeline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    min-height: 100%;
    align-items: center;
`;
export const PipelineCircle = styled.div`
    background-color: #143642;
    height: 1.2em;
    width: 1.2em;
    min-width: 1.2em;
    min-height: 1.2em;
    border-radius: 50%;
`;
export const PipelineLine = styled.div`
    background-color: #143642;
    width: 0.15em;
    border-radius: 0.2em;
    height: 100%;
`;

export const Addresses = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;
export const RestaurantAddress = styled.div`
    display: flex;
    flex-direction: column;
`;
export const RestaurantName = styled.div`
    color: #143642;
    font-size: xx-small;
`;
export const Address = styled.div`
    color: #143642;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6em;
`;
export const Button = styled.button`
    transition: opacity 0.3s;
    height: 4.5em;
    width: 4.5em;
    border: 2em;
    border-radius: 1.2em;
    background-color: ${props => props.color};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
