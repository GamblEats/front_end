import styled from 'styled-components';

export const NavContainer = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 8rem;
    padding: 2rem 0;
    @media (max-width: 800px) {
        height: 2rem;
        width: 100%;
    }
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media (max-width: 800px) {
        flex-direction: row;
    }
`;
export const NavAccountItem = styled(NavItem)`
    margin: 1rem 0;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const NavPageItems = styled(NavItem)`
    flex: 1;
    gap: 4rem;
    @media (max-width: 800px) {
        flex: none;
        align-items: center;
        justify-content: space-evenly;
        gap: 2rem;
    }
`;
export const NavDisconnectItem = styled(NavItem)`
    margin: 1rem 0;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const NavCircleItem = styled.div`
    display: flex;
    justify-content: center;
`;
export const NavPageIcon = styled.div`
    color: #d9d9d9;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;
export const NavPageText = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;

export const NavCircleButton = styled.div`
    background-color: #f2f2f2;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: border 0.3s;
    border: 0em solid #e5bf00;
    &:hover {
        opacity: 0.8;
    }
`;
export const NavAccountCircleButton = styled(NavCircleButton)`
    align-items: flex-end;
`;
export const NavDisconnectCircleButton = styled(NavCircleButton)`
    align-items: center;
`;
