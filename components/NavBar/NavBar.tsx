import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUser,
    faRightFromBracket,
    faUtensils,
    faGift,
    faReceipt,
    faStore,
    faPersonBiking,
    faBox,
    faChartSimple,
    faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';

import {
    NavDisconnectItem,
    NavAccountItem,
    NavContainer,
    NavPageItems,
    NavCircleItem,
    NavAccountCircleButton,
    NavDisconnectCircleButton,
} from './styles';
import { useRouter } from 'next/router';
import NavPageItem from './NavPageItem';
import { useTranslation } from 'next-i18next';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { session } from 'next-auth/core/routes';

const NavBar = () => {
    const router = useRouter();
    const { data: session }: any = useSession();
    const [icon, setIcon] = useState<IconProp>();

    if (session && !icon) {
        switch (session.user.role) {
            case 'restaurant':
                setIcon(faStore);
                break;
            case 'deliverer':
                setIcon(faPersonBiking);
                break;
            case 'commercial':
                setIcon(faHandHoldingDollar);
                break;
            default:
                setIcon(faUser);
        }
    }

    const handleSignOut = () => {
        signOut();
    };
    return (
        <NavContainer>
            <NavAccountItem>
                <NavCircleItem
                    onClick={() => {
                        router.push('/account');
                    }}>
                    <NavAccountCircleButton className={router.asPath === '/account' ? 'onAccount' : ''}>
                        <FontAwesomeIcon className="accountIcon" icon={icon ? icon : faUser} />
                    </NavAccountCircleButton>
                </NavCircleItem>
            </NavAccountItem>
            <NavPageItems>
                {session && session.user.role === 'client' && (
                    <>
                        <NavPageItem name={'home'} icon={faHouse}></NavPageItem>
                        <NavPageItem name={'restaurants'} icon={faUtensils}></NavPageItem>
                        <NavPageItem name={'orders'} icon={faReceipt}></NavPageItem>
                    </>
                )}
                {session && session.user.role === 'deliverer' && (
                    <>
                        <NavPageItem name={'deliveries'} icon={faBox}></NavPageItem>
                    </>
                )}
                {session && session.user.role === 'restaurant' && (
                    <>
                        <NavPageItem name={'orders'} icon={faBox}></NavPageItem>
                        <NavPageItem name={'myRestaurant'} icon={faUtensils}></NavPageItem>
                        <NavPageItem name={'statistics'} icon={faChartSimple}></NavPageItem>
                    </>
                )}
                {session && session.user.role === 'commercial' && (
                    <>
                        <NavPageItem name={'statistics'} icon={faChartSimple}></NavPageItem>
                    </>
                )}
                <NavPageItem name={'referral'} icon={faGift}></NavPageItem>
                <NavPageItem name={'account'} icon={faUser}></NavPageItem>
            </NavPageItems>
            <NavDisconnectItem>
                <NavCircleItem onClick={handleSignOut}>
                    <NavDisconnectCircleButton>
                        <FontAwesomeIcon className="disconnectIcon" icon={faRightFromBracket} />
                    </NavDisconnectCircleButton>
                </NavCircleItem>
            </NavDisconnectItem>
        </NavContainer>
    );
};

export default NavBar;
