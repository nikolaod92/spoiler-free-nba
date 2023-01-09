import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Game } from "../../types";
import { hitTheOver, isBlowout, winner } from "../../utils";
import BoxScore from "../BoxScore/BoxScore";
import Logo from "../Logo";
import ToggleButton from "../ToggleButton";
import Score from "./ScoreView";
import TeamView from "./TeamView";

interface Props {
  game: Game;
}

const GameInfo = ({ game }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [game]);

  const { home_team_score, visitor_team_score } = game;

  return (
    <VStack w={{ base: "max-content", md: "4xl" }} justifyContent="center">
      <Flex w="full" borderRadius={6} backgroundColor="gray.100" shadow="sm">
        <TeamView team={game.home_team} home />
        <Score home={home_team_score} away={visitor_team_score} show={show} status={game.status} />
        <TeamView team={game.visitor_team} />
      </Flex>
      {game.period && (
        <HStack>
          <BoxScore
            gameId={game.id}
            home={game.home_team.abbreviation}
            away={game.visitor_team.abbreviation}
          />
          <ToggleButton data={["Winner?", <Logo size={22} team={winner(game)} />]} size="xs" />
          <Button
            size="xs"
            width={24}
            colorScheme="whatsapp"
            onClick={() => setShow(!show)}
            shadow="sm"
          >
            {show ? "Hide" : "Show"} score
          </Button>
          <ToggleButton
            data={["Over 220.5?", hitTheOver(home_team_score, visitor_team_score)]}
            size="xs"
          />
          <ToggleButton
            data={["Blowout?", isBlowout(home_team_score, visitor_team_score) ? "Yes" : "No"]}
            size="xs"
          />
        </HStack>
      )}
    </VStack>
  );
};

export default GameInfo;
