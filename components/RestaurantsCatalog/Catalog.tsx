import { useState } from 'react';
import { RestaurantsContainer, FiltersContainer, CategoriesContainer } from './styles';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { useTranslation } from 'next-i18next';
import useStore from '../../store/useStore';
import SearchInput from '../globals/SearchInput';
import CategoryFilter from './CategoryFilter';
import { categories } from '../../config/categories';

const Catalog = () => {
    const { t } = useTranslation('common');
    const [research, setResearch] = useState('');
    const { restaurants, getRestaurants } = useStore();
    if (restaurants.length === 0) {
        getRestaurants();
    }

    return (
        <>
            <FiltersContainer>
                <SearchInput
                    onChange={ev => setResearch(ev.target.value)}
                    placeHolder={t('findRestaurant')}></SearchInput>
                <CategoriesContainer>
                    {categories.map((c, i) => (
                        <CategoryFilter pic={c.pic} name={c.name}></CategoryFilter>
                    ))}
                </CategoriesContainer>
            </FiltersContainer>
            <RestaurantsContainer>
                {restaurants
                    .filter(r => r.name.toLowerCase().indexOf(research.toLowerCase()) > -1)
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
