import { faBars, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Logo } from '../../styles/globals';
import { MenuContainer, MenuItem, MobileMenuIcon, PartnersList } from './styles';
import Button from '../globals/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuItemProps {
    isOpen: boolean;
}

const Menu = () => {
    const { t } = useTranslation('common');
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const router = useRouter();
    return (
        <MenuContainer>
            <Logo src="/pictures/logo-text.png"></Logo>
            <MenuItem isOpen={mobileMenuIsOpen}>
                <Button text={t('contactUs')} onClick={() => {}}></Button>
                <div>
                    <div onMouseOver={() => setDropdownIsOpen(true)} onMouseLeave={() => setDropdownIsOpen(false)}>
                        <Button
                            text={t('partners')}
                            icon={dropdownIsOpen ? faCaretUp : faCaretDown}
                            onClick={() => {}}></Button>
                    </div>
                    <PartnersList
                        onMouseOver={() => setDropdownIsOpen(true)}
                        onMouseLeave={() => setDropdownIsOpen(false)}
                        style={{ display: dropdownIsOpen ? 'flex' : 'none' }}>
                        <Button
                            text={t('restorers')}
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, form: 'signIn', as: 'restaurant' },
                                });
                            }}></Button>
                        <Button
                            text={t('delivers')}
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, form: 'signIn', as: 'deliverer' },
                                });
                            }}></Button>
                    </PartnersList>
                </div>
                <Button
                    text={t('signIn')}
                    onClick={() => {
                        router.replace({
                            query: { ...router.query, form: 'signIn', as: 'client' },
                        });
                    }}></Button>
                <Button
                    backgroundColor="#e5bf00"
                    text={t('startEating')}
                    onClick={() => {
                        router.replace({
                            query: { ...router.query, form: 'signUp' },
                        });
                    }}></Button>
            </MenuItem>
            <MobileMenuIcon
                onClick={() => {
                    setMobileMenuIsOpen(!mobileMenuIsOpen);
                }}>
                <FontAwesomeIcon color={'#143642'} icon={faBars} />
            </MobileMenuIcon>
        </MenuContainer>
    );
};

export default Menu;
