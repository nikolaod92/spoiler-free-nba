import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Stats } from "../../types";
import Loader from "../Loader/Loader";
import LoaderContainer from "../Loader/LoaderContainer";
import Logo, { TeamAbbreviation } from "../Logo";
import StatTable from "./StatTable";
import StatTableDisplaySwitch from "./StatTableDisplaySwitch";

interface Props {
  gameId: number;
  home: TeamAbbreviation;
  away: TeamAbbreviation;
}

const BoxScore = ({ gameId, home, away }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [stats, setStats] = useState<Stats[] | null>(null);
  const [display, setDisplay] = useState<TeamAbbreviation | "all">("all");

  console.log(display);

  useEffect(() => {
    if (isOpen) {
      fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=50`)
        .then((response) => response.json())
        .then(({ data }: { data: Stats[] }) => {
          setStats(data.sort((a, b) => Number(b.pts) - Number(a.pts)));
        });
    }
  }, [isOpen]);

  return (
    <>
      <Button size="xs" shadow="sm" w={24} onClick={onOpen}>
        Box Score
      </Button>
      <Modal
        size={{ base: "md", md: "6xl" }}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        blockScrollOnMount
      >
        {!stats ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(2px) " />
            <ModalContent overflow="hidden">
              <ModalHeader>
                <Flex direction="column">
                  <Flex gap={2}>
                    <Logo size={64} team={home} />
                    <Text fontSize="4xl">{stats[0].game.home_team_score}</Text>
                    <Text fontSize="4xl">{stats[0].game.visitor_team_score}</Text>
                    <Logo size={64} team={away} />
                  </Flex>
                  <Flex alignItems="center">
                    <Text fontSize="xs" mr={2}>
                      Show stats for:
                    </Text>
                    <StatTableDisplaySwitch
                      home={home}
                      away={away}
                      onChange={(e) => setDisplay(e)}
                    />
                  </Flex>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody p={0}>
                <StatTable stats={stats} display={display} />
              </ModalBody>
            </ModalContent>
          </>
        )}
      </Modal>
    </>
  );
};

export default BoxScore;
