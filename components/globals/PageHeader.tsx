import { faBell, faBox } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import Widget from '../Widget/Widget';
import { HeaderContainer, HeaderTitle, HeaderWidgets } from './styles';

interface Props {
    title: string;
}

const PageHeader = ({ title }: Props) => {
    const { data: session }: any = useSession();
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderWidgets>
                <div style={{ display: session.user.role == 'client' ? 'block' : 'none' }}>
                    <Widget icon={faBox}></Widget>
                </div>
                <Widget icon={faBell}></Widget>
            </HeaderWidgets>
        </HeaderContainer>
    );
};

export default PageHeader;
