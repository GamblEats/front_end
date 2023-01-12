import { useRouter } from 'next/router';
import { CategoryButton, CategoryImg } from './styles';

interface Props {
    name: string;
    pic: any;
}

const CategoryFilter = ({ name, pic }: Props) => {
    const router = useRouter();

    return (
        <CategoryButton>
            <CategoryImg src={pic} alt={name} />
        </CategoryButton>
    );
};

export default CategoryFilter;
