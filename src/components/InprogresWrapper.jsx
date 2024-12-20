import InprogresItem from "./InprogresItem";
import { Wrapper } from "./StyledComponents";

const InprogresWrapper = () => {
    const tickets = [1];
    return (
        <Wrapper>
            {tickets.map((ticket) => (
                <InprogresItem key={ticket} type="text" value={ticket} readOnly />
            ))}
        </Wrapper>
    );
};

export default InprogresWrapper;

