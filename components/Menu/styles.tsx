import styled from 'styled-components';
import { MenuItemProps } from './Menu';

export const MenuContainer = styled.div`
    top: 2em;
    left: 7%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 86%;
    height: 5em;
    align-items: center;
    z-index: 1;
`;

export const MenuItem = styled.div<MenuItemProps>`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 1000px) {
        position: absolute;
        flex-direction: column;
        display: ${props => (props.isOpen ? 'block' : 'none')};
        background-color: white;
        border-radius: 1rem;
        padding: 0.5rem;
        gap: 0.5rem;
        top: 4rem;
        right: 0;
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    @media (max-width: 1000px) {
        display: block;
    }
`;

export const PartnersList = styled.div`
    flex-direction: column;
    @media (min-width: 1000px) {
        position: absolute;
        background-color: white;
        border-radius: 1rem;
        z-index: 1;
        gap: 0.5rem;
        padding: 1rem 0.5rem;
    }
    @media (max-width: 1000px) {
        position: static;
    }
`;
