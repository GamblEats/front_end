import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { NavPageIcon, NavPageText } from './styles';
import { useTranslation } from 'next-i18next';

interface Props {
    name: string;
    icon: IconProp;
}

const NavPageItems = ({ name, icon }: Props) => {
    const router = useRouter();
    const { t } = useTranslation('common');
    return (
        <NavPageIcon
            className={name + 'PageIcon'}
            onClick={() => {
                router.push('/' + name);
            }}>
            <div className={router.asPath === '/' + name ? 'onPage' : ''}>
                <FontAwesomeIcon className="pageIcon" icon={icon} />
                <NavPageText>{t(name)}</NavPageText>
            </div>
        </NavPageIcon>
    );
};

export default NavPageItems;
