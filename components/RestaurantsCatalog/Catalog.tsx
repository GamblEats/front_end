import { Key, useEffect, useState } from 'react';
import { RestaurantsContainer, FiltersContainer, Category, FilterWrapper, CategoryImg, CategoryName } from './styles';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { useTranslation } from 'next-i18next';
import useStore from '../../store/useStore';
import SearchInput from '../globals/SearchInput';
import { categories } from '../../config/categories';

export interface CategoryProps {
    selected: boolean;
}

export interface CategoryNameProps {
    selected: boolean;
}
import { OrderModel } from '../../models/OrderModel';

interface Props {
    restaurants: any;
}

const Catalog = ({ restaurants }: Props) => {
    const { t } = useTranslation('common');
    const [research, setResearch] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);

    const handleCategoryClick = (category: any) => {
        if (selectedCategories.includes(category.name.toLowerCase())) {
            setSelectedCategories(selectedCategories.filter(c => c !== category.name.toLowerCase()));
        } else {
            setSelectedCategories([...selectedCategories, category.name.toLowerCase()]);
        }
    };

    return (
        <>
            <FiltersContainer>
                <SearchInput onChange={ev => setResearch(ev.target.value)} placeHolder={t('findRestaurant')} />
                <FilterWrapper>
                    {categories.map((category: any) => (
                        <Category
                            title={category.name}
                            key={category.name}
                            onClick={() => handleCategoryClick(category)}
                            selected={selectedCategories.includes(category.name.toLowerCase())}>
                            <CategoryImg src={`/pictures/icons/${category.pic}`} alt={category.name} />
                            <CategoryName selected={selectedCategories.includes(category.name.toLowerCase())}>
                                {category.name}
                            </CategoryName>
                        </Category>
                    ))}
                </FilterWrapper>
            </FiltersContainer>
            <RestaurantsContainer>
                {restaurants
                    .filter(
                        (r: { name: string; categories: string[] }) =>
                            r.name.toLowerCase().indexOf(research.toLowerCase()) > -1 &&
                            (selectedCategories.length === 0 ||
                                r.categories.some((c: string) => selectedCategories.includes(c)))
                    )
                    .map(
                        (
                            r: {
                                id: string;
                                name: string;
                                pic: string;
                                deliveryPrice: number;
                                description: string;
                                deliveryTime: string;
                                rating: number;
                            },
                            i: Key | null | undefined
                        ) => (
                            <RestaurantCard
                                key={i}
                                id={r.id}
                                name={r.name}
                                pic={r.pic}
                                deliveryPrice={r.deliveryPrice}
                                description={r.description}
                                deliveryTime={r.deliveryTime}
                                rating={r.rating}></RestaurantCard>
                        )
                    )}
            </RestaurantsContainer>
        </>
    );
};

export default Catalog;
