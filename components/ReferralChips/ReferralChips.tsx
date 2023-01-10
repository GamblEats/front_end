import { ChipsContainer, ChipsDate, ChipsName } from './styles';

interface Props {
    name: string;
    date: string;
}

const ReferralChips = ({ name, date }: Props) => {
    return (
        <ChipsContainer>
            <ChipsName>{name}</ChipsName>
            <ChipsDate>{date}</ChipsDate>
        </ChipsContainer>
    );
};

export default ReferralChips;
