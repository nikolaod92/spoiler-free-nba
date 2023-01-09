import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  selected: Date | null | undefined;
  onChange: (date: Date, event: React.SyntheticEvent<any, Event> | undefined) => void;
}

const GameDatePicker = ({ selected, onChange }: Props) => {
  return <DatePicker dateFormat="dd.MM.yyyy" selected={selected} onChange={onChange} />;
};

export default GameDatePicker;
