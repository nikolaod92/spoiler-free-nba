import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { TeamAbbreviation } from "../Logo";
import BoxScoreModal from "./BoxScoreModal";

type Props = {
  gameId: number;
  home: TeamAbbreviation;
  away: TeamAbbreviation;
};

const BoxScore = ({ ...props }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size='xs' shadow='sm' w={24} onClick={onOpen}>
        Box Score
      </Button>
      {isOpen && <BoxScoreModal {...props} onClose={onClose} />}
    </>
  );
};

export default BoxScore;
