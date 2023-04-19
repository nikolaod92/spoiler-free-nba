import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import GameDatePicker from "./DatePicker";

interface Props {
  date: Date;
  setDate: (date: Date) => void;
}

const DatePickerContainer = ({ date, setDate }: Props) => {
  return (
    <Flex alignItems='center' mx='auto' maxW='fit-content'>
      <ChevronLeftIcon
        onClick={() => setDate(new Date(date.valueOf() - 86400000))}
        _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
        transition='all 0.2s ease'
        fontSize={20}
        mr={1}
      />
      <GameDatePicker selected={date} onChange={setDate} />
      <ChevronRightIcon
        onClick={() => setDate(new Date(date.valueOf() + 86400000))}
        _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
        fontSize={20}
        transition='all 0.2s ease'
        ml={1}
      />
    </Flex>
  );
};

export default DatePickerContainer;
