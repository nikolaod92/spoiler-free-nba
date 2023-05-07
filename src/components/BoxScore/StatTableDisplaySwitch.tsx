import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { TeamAbbreviation } from "../ui/Logo";

type Props = {
  home: TeamAbbreviation;
  away: TeamAbbreviation;
  onChange: (value: TeamAbbreviation | "all") => void;
};

const StatTableDisplaySwitch = ({ home, away, onChange }: Props) => {
  return (
    <RadioGroup onChange={onChange}>
      <Stack direction='row'>
        <Radio size='sm' value='all' colorScheme='gray'>
          All
        </Radio>
        <Radio spacing={1} size='sm' value={home} colorScheme='gray'>
          {home}
        </Radio>
        <Radio spacing={1} size='sm' value={away} colorScheme='gray'>
          {away}
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default StatTableDisplaySwitch;
