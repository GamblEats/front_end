import { useState } from 'react';
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

const Catalog = () => {
    const { t } = useTranslation('common');
    const placeHolder = t('findRestaurant');
    const [research, setResearch] = useState('');
    const { restaurants, getRestaurants } = useStore();
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);

    if (restaurants.length === 0) {
        getRestaurants();
    }

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
                        r =>
                            r.name.toLowerCase().indexOf(research.toLowerCase()) > -1 &&
                            (selectedCategories.length === 0 || r.categories.some(c => selectedCategories.includes(c)))
                    )
                    .map((r, i) => (
                        <RestaurantCard
                            key={i}
                            id={r.id}
                            name={r.name}
                            pic={r.pic}
                            deliveryPrice={r.deliveryPrice}
                            description={r.description}
                            deliveryTime={r.deliveryTime}
                            rating={r.rating}></RestaurantCard>
                    ))}
            </RestaurantsContainer>
        </>
    );
};

export default Catalog;
