import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Flex,
  ModalCloseButton,
  ModalBody,
  Text,
  Modal
} from "@chakra-ui/react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Stats } from "../../types";
import Loader from "../ui/Loader/Loader";
import LoaderContainer from "../ui/Loader/LoaderContainer";
import Logo, { TeamAbbreviation } from "../ui/Logo";
import ErrorDisplay from "../ui/ErrorDisplay";
import StatTable from "./StatTable";
import StatTableDisplaySwitch from "./StatTableDisplaySwitch";

type Props = {
  gameId: number;
  home: TeamAbbreviation;
  away: TeamAbbreviation;
  onClose: () => void;
};

const BoxScoreModal = ({ gameId, home, away, onClose }: Props) => {
  const [display, setDisplay] = useState<TeamAbbreviation | "all">("all");

  const {
    data: stats,
    loading,
    error
  } = useFetch<Stats[]>(`stats?game_ids[]=${gameId}&per_page=50`, { timeout: 5000 });

  const sortedStats = stats?.sort((a, b) => Number(b.pts) - Number(a.pts));
  console.log("Fetching stats for game: ", gameId, home, away);

  return (
    <Modal
      size={{ lg: "6xl" }}
      isOpen
      onClose={onClose}
      motionPreset='slideInBottom'
      scrollBehavior='inside'
      blockScrollOnMount
    >
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        sortedStats && (
          <>
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(2px) ' />
            <ModalContent overflow='hidden'>
              <ModalHeader>
                <Flex direction='column'>
                  <Flex gap={2}>
                    <Logo size={64} team={home} />
                    <Text fontSize='4xl'>{sortedStats[0].game.home_team_score}</Text>
                    <Text fontSize='4xl'>{sortedStats[0].game.visitor_team_score}</Text>
                    <Logo size={64} team={away} />
                  </Flex>
                  <Flex alignItems='center'>
                    <Text fontSize='xs' mr={2}>
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
                <StatTable stats={sortedStats} display={display} />
              </ModalBody>
            </ModalContent>
          </>
        )
      )}
      {error.length > 0 && <ErrorDisplay message={error} />}
    </Modal>
  );
};

export default BoxScoreModal;
