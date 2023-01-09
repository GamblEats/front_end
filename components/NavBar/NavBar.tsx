import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket, faUtensils, faGift, faReceipt } from '@fortawesome/free-solid-svg-icons';
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
import { signOut } from 'next-auth/react';

const NavBar = () => {
    const router = useRouter();
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
                        <FontAwesomeIcon className="accountIcon" icon={faUser} />
                    </NavAccountCircleButton>
                </NavCircleItem>
            </NavAccountItem>
            <NavPageItems>
                <NavPageItem name={'home'} icon={faHouse}></NavPageItem>
                <NavPageItem name={'restaurants'} icon={faUtensils}></NavPageItem>
                <NavPageItem name={'orders'} icon={faReceipt}></NavPageItem>
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
