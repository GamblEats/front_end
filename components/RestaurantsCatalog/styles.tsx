import styled from 'styled-components';

export const RestaurantsContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1.2rem;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    margin-bottom: 1.5rem;
`;

export const SearchBar = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 25px;
    gap: 10px;

    width: 496px;
    height: 64px;

    background: #ffffff;
    border-radius: 40px;
`;

export const SearchIcon = styled.img``;
