import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ItemModel } from '../../models/ItemModel';
import { MenuModel } from '../../models/MenuModel';
import Button from '../globals/Button';
import { ItemCardContainer, ItemImg, ItemCardContent, ItemText, ItemCardHeader, ItemCardButton } from './styles';

interface Props {
    item?: ItemModel;
    menu?: MenuModel;
}

export interface ItemTextProps {
    size: string;
    weight?: string;
}

const DeliveryStepper = ({ item, menu }: Props) => {
    return (
        <ItemCardContainer>
            <ItemImg src={item ? item.pic : menu ? menu.pic : ''}></ItemImg>
            <ItemCardContent>
                <ItemCardHeader>
                    <ItemText size="1.3rem" weight="700">
                        {item ? item.name : menu ? menu.name : ''}
                    </ItemText>
                    <ItemText size="1.1rem" weight="600">
                        11.80€
                    </ItemText>
                </ItemCardHeader>
                {item?.description && <ItemText size="0.9rem">{item.description}</ItemText>}
                {menu?.description && <ItemText size="0.9rem">{menu.description}</ItemText>}
                <ItemCardButton>
                    <Button
                        text="add to card"
                        small={true}
                        backgroundColor="#E5BF00"
                        icon={faCartShopping}
                        onClick={() => {}}></Button>
                </ItemCardButton>
            </ItemCardContent>
        </ItemCardContainer>
    );
};

export default DeliveryStepper;
