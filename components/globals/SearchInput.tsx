import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, InputContainer } from './styles';

interface Props {
    placeHolder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeHolder, onChange }: Props) => {
    return (
        <InputContainer>
            <Input onChange={onChange} placeholder={placeHolder}></Input>
            <FontAwesomeIcon className="searchIcon" color="#D9D9D9" icon={faMagnifyingGlass}></FontAwesomeIcon>
        </InputContainer>
    );
};

export default SearchInput;
