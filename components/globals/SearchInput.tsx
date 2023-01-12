import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, InputContainer } from './styles';

interface Props {
    placeHolder: string;
}

const SearchInput = ({ placeHolder }: Props) => {
    return (
        <InputContainer>
            <Input placeholder={placeHolder}></Input>
            <FontAwesomeIcon className="searchIcon" color="#D9D9D9" icon={faMagnifyingGlass}></FontAwesomeIcon>
        </InputContainer>
    );
};

export default SearchInput;
