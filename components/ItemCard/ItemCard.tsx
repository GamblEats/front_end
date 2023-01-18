import { faCartShopping, faPen, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ItemModel } from '../../models/ItemModel';
import { MenuModel } from '../../models/MenuModel';
import Button from '../globals/Button';
import { ItemCardContainer, ItemImg, ItemCardContent, ItemText, ItemCardHeader, ItemCardButton } from './styles';
import { BlurBg, ButtonsModal, DeleteButton, EditButton, Label, Modal } from '../AccountCard/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { SignInButton, SignUpButton } from '../AuthForm/styles';
import axios from 'axios';
import { userApi } from '../../public/const';
import { signOut } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { use } from 'i18next';
import { Details } from '../RestaurantDetails/styles';
import ItemForm from './ItemForm';

interface Props {
    item?: ItemModel;
    menu?: MenuModel;
    onClick: () => void;
    shop?: boolean;
    edit?: boolean;
}

export interface ItemTextProps {
    size: string;
    weight?: string;
}

const DeliveryStepper = ({ item, menu, onClick, shop = true, edit = false }: Props) => {
    const { t } = useTranslation('common');
    const [deleteItem, setDeleteItem] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    return (
        <ItemCardContainer>
            <ItemImg src={item ? item.pic : menu ? menu.pic : ''}></ItemImg>
            <ItemCardContent>
                <ItemCardHeader>
                    <ItemText size="1.3rem" weight="700">
                        {item ? item.name : menu ? menu.name : ''}
                    </ItemText>
                    <ItemText size="1.1rem" weight="600">
                        {!edit && item && item?.price + ' €'}
                        {!edit && menu && menu?.price + ' €'}
                    </ItemText>
                </ItemCardHeader>
                {!edit && item?.description && <ItemText size="0.9rem">{item.description}</ItemText>}
                {!edit && menu?.description && <ItemText size="0.9rem">{menu.description}</ItemText>}
                {shop && (
                    <ItemCardButton>
                        <Button
                            text="add to card"
                            small={true}
                            backgroundColor="#E5BF00"
                            icon={faCartShopping}
                            onClick={onClick}></Button>
                    </ItemCardButton>
                )}
                {edit && (
                    <>
                        <EditButton
                            type={'button'}
                            style={{ backgroundColor: '#e5bf00', width: '2.5rem', height: '2.5rem' }}
                            onClick={() => {
                                setIsEditing(true);
                            }}>
                            <FontAwesomeIcon icon={faPen} />
                        </EditButton>
                        <DeleteButton
                            type={'button'}
                            style={{ backgroundColor: '#C0392B', width: '2.5rem', height: '2.5rem' }}
                            onClick={() => {
                                setDeleteItem(true);
                            }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </DeleteButton>
                    </>
                )}
            </ItemCardContent>
            {deleteItem && (
                <BlurBg
                    onClick={e => {
                        e.stopPropagation();
                    }}>
                    <Modal onClick={e => e.stopPropagation()}>
                        <Label> {t('deleteConfirm')}</Label>
                        <ButtonsModal>
                            <SignInButton
                                type="button"
                                onClick={() => {
                                    setDeleteItem(false);
                                }}>
                                {t('no')}
                            </SignInButton>
                            <SignUpButton
                                type="button"
                                color={'#e5bf00'}
                                onClick={() => {
                                    setDeleteItem(false);
                                    console.log('deleted');
                                    // axios
                                    //     .delete(`${userApi}/users/${session.user.id}`, {
                                    //         headers: {
                                    //             'Content-Type': 'application/json',
                                    //         },
                                    //     })
                                    //     .then(() => {
                                    //         setDeleteItem(false);
                                    //     });
                                }}>
                                {t('yes')}
                            </SignUpButton>
                        </ButtonsModal>
                    </Modal>
                </BlurBg>
            )}
            {isEditing && item && <ItemForm item={item} setIsEditing={setIsEditing} />}
        </ItemCardContainer>
    );
};

export default DeliveryStepper;
