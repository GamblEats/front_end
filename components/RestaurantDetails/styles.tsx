import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlurBg = styled.div`
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

export const Details = styled.div`
    position: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f2f2;
    width: 85%;
    height: 85%;
    z-index: 21;
    border-radius: 1.5em;
    display: flex;
    @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        flex-direction: column;
    }
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 20%;
    height: 100%;
    border-radius: 1.5em 0 0 1.5em;
    @media (max-width: 1200px) {
        width: 100%;
        height: 12rem;
        border-radius: 0;
    }
`;

export const RestaurantInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    @media (max-width: 1200px) {
        flex-direction: row;
        height: 100%;
    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
`;

export const RestaurantImg = styled.img`
    border-radius: 1.5em 0 1.5em 0;
    object-fit: cover;
    height: 100%;
    @media (max-width: 1200px) {
        height: 100% !important;
        min-height: 100% !important;
        width: 8rem;
        border-radius: 0 0 1.5em 0;
    }
`;

export const RestaurantTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RestaurantAdditionalInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Info = styled.div`
    display: flex;
    gap: 0.5rem;
    color: #d9d9d9;
    font-weight: 600;
`;

export const Separator = styled.div`
    width: 100%;
    height: 0.2rem;
    background-color: #d9d9d9;
`;

export const RestaurantMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 50%;
    gap: 1rem;
    @media (max-width: 1200px) {
        flex-direction: row;
    }
`;

export const Categorie = styled.div`
    color: #143642;
    font-weight: 600;
    font-size: 1.4rem;
`;

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
`;

export const ItemSection = styled.div``;

export const Section = styled.div`
    overflow: auto;
    position: relative;
`;

export const SectionTitle = styled.div`
    color: #143642;
    font-weight: 700;
    font-size: 1.9rem;
    margin: 1.5rem 0;
`;

export const Items = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const BasketModal = styled.div`
    cursor: pointer;
    color: white;
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    background: rgba(20, 54, 66, 0.69);
    backdrop-filter: blur(2px);
    width: 20rem;
    height: 3rem;
    border-radius: 3rem;
    z-index: 50;
    padding-right: 1rem;
    padding-left: 0.5rem;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const NumberOfItems = styled.div`
    display: flex;
    background: rgba(20, 54, 66, 0.69);
    backdrop-filter: blur(2px);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
`;

export const Order = styled.div`
    padding: 1rem;
    padding-block: 3rem;
    right: 0;
    overflow: hidden;
    transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
    position: absolute;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: white;
    //width: 25%;
    width: 5rem;
    height: 100%;
    border-radius: 0 1.5em 1.5em 0;
    align-items: center;
`;

export const OrderTitle = styled.div`
    position: relative;
    font-weight: 800;
    font-size: x-large;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const Total = styled.div`
    display: flex;
    font-weight: 600;
    font-size: large;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

export const CloseModal = styled(FontAwesomeIcon)`
    @media (min-width: 1201px) {
        right: 1.5rem;
        top: 1.5rem;
        cursor: pointer;
        font-size: 2rem;
        color: #e5bf00;
        z-index: 100;
    }
    @media screen and (max-width: 1200px) {
        color: white;
        width: 0.7rem;
        cursor: pointer;
    }
`;

export const DivClose = styled.div`
    @media (min-width: 1201px) {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(242, 242, 242, 0.24);
        backdrop-filter: blur(3px);
        width: 2rem;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border-radius: 50%;
        z-index: 100;
    }
    @media (max-width: 1200px) {
        position: absolute;
        display: flex;
        background: rgba(20, 54, 66, 0.69);
        backdrop-filter: blur(3px);
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        top: 95%;
        left: 5%;
        transform: translate(-50%, -50%);
        z-index: 100;
    }
`;
