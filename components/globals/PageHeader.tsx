import { faBell, faBox } from '@fortawesome/free-solid-svg-icons';
import Widget from '../Widget/Widget';
import { HeaderContainer, HeaderTitle, HeaderWidgets } from './styles';

interface Props {
    title: string;
}

const PageHeader = ({ title }: Props) => {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderWidgets>
                <Widget icon={faBox}></Widget>
                <Widget icon={faBell}></Widget>
            </HeaderWidgets>
        </HeaderContainer>
    );
};

export default PageHeader;
