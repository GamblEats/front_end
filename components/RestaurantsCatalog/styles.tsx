import styled from 'styled-components';
import { CategoryNameProps, CategoryProps } from './Catalog';

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
    gap: 0.5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const SearchIcon = styled.img``;

export const FilterWrapper = styled.div`
    display: flex;
    overflow: scroll;
    max-width: 100%;
    min-width: 40%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Category = styled.div<CategoryProps>`
    display: flex;
    gap: 0.7rem;
    align-items: center;
    height: 50px;
    padding: 8px;
    border-radius: 25px;
    margin: 0 5px;
    cursor: pointer;
    background-color: ${props => (props.selected ? '#e6bf00' : 'white')};
    color: ${props => (props.selected ? 'white' : 'black')};
`;

export const CategoryName = styled.span<CategoryNameProps>`
    display: ${props => (props.selected ? '' : 'none')};
`;

export const CategoryImg = styled.img`
    height: 100%;
    align-items: center;
`;
