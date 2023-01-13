import { useTranslation } from 'next-i18next';
import { ItemModel } from '../../models/ItemModel';
import { MenuModel } from '../../models/MenuModel';
import { Counter, CountValue, CountX, ItemContainer, ItemCount, ItemListContainer, ItemName } from './styles';

interface Props {
    itemList: (ItemModel | MenuModel)[];
}

const ItemList = ({ itemList }: Props) => {
    const { t } = useTranslation('common');
    return (
        <ItemListContainer>
            {itemList.map((item, i) => (
                <ItemContainer>
                    <ItemCount>
                        <Counter>
                            <CountX>x</CountX>
                            <CountValue>1</CountValue>
                        </Counter>
                    </ItemCount>
                    <ItemName>{item.name}</ItemName>
                </ItemContainer>
            ))}
        </ItemListContainer>
    );
};

export default ItemList;
