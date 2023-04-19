import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Tr, Td, Flex, Badge, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Averages, Stats } from "../../types";
import { gameScore, isTripleDouble } from "../../utils";
import Logo from "../Logo";

interface Props {
  playerStats: Stats;
}

const PlayerStatRow = ({ playerStats }: Props) => {
  const [showAvg, setShowAvg] = useState(false);
  const [averages, setAverages] = useState<Averages | null>(null);

  const {
    player,
    pts,
    ast,
    reb,
    blk,
    turnover,
    team,
    min,
    fga,
    fgm,
    stl,
    fg3a,
    fg3m,
    fta,
    ftm,
    pf
  } = playerStats;

  const fetchAverages = () => {
    fetch(
      `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerStats.player.id}`
    )
      .then((response) => response.json())
      .then(({ data }: { data: Averages[] }) => {
        setAverages(data[0]);
        setShowAvg(true);
      });
  };

  return (
    <>
      <Tr>
        <Td>
          <Flex alignItems='center'>
            <Logo size={24} team={team.abbreviation} />
            <Text fontWeight='bold' fontSize='sm' ml={3} mr={1}>
              {player.last_name}
            </Text>
            <Text display={{ base: "none", md: "flex" }}>{player.first_name}</Text>
            {!showAvg ? (
              <ChevronDownIcon ml={1} onClick={fetchAverages} _hover={{ cursor: "pointer" }} />
            ) : (
              <ChevronUpIcon
                ml={1}
                onClick={() => setShowAvg(false)}
                _hover={{ cursor: "pointer" }}
              />
            )}
            {isTripleDouble(pts, reb, ast, blk, stl) && (
              <Badge ml={2} fontSize='0.8em' colorScheme='green'>
                Triple-double!
              </Badge>
            )}
          </Flex>
        </Td>
        <Td isNumeric fontWeight='bold'>
          {pts}
        </Td>
        <Td isNumeric>{reb}</Td>
        <Td isNumeric>{ast}</Td>
        <Td isNumeric>
          {fgm}/{fga}
        </Td>
        <Td isNumeric>
          {fg3m}/{fg3a}
        </Td>
        <Td isNumeric>
          {ftm}/{fta}
        </Td>
        <Td isNumeric>{blk}</Td>
        <Td isNumeric>{stl}</Td>
        <Td isNumeric>{turnover}</Td>
        <Td isNumeric>{pf}</Td>
        <Td isNumeric>{Number(min)}</Td>
        <Td isNumeric>{gameScore(playerStats)}</Td>
      </Tr>
      {averages && showAvg && (
        <Tr bg='gray.50'>
          <Td>Season Averages:</Td>
          <Td isNumeric fontWeight='bold'>
            {averages?.pts.toFixed(1)}
          </Td>
          <Td isNumeric>{averages.reb.toFixed(1)}</Td>
          <Td isNumeric>{averages.ast.toFixed(1)}</Td>
          <Td isNumeric>{Math.round(averages.fg_pct * 100) + "%"}</Td>
          <Td isNumeric>{Math.round(averages.fg3_pct * 100) + "%"}</Td>
          <Td isNumeric>{Math.round(averages.ft_pct * 100) + "%"}</Td>
          <Td isNumeric>{averages.blk.toFixed(1)}</Td>
          <Td isNumeric>{averages.stl.toFixed(1)}</Td>
          <Td isNumeric>{averages.turnover.toFixed(1)}</Td>
          <Td isNumeric>{averages.pf.toFixed(1)}</Td>
          <Td isNumeric></Td>
          <Td isNumeric></Td>
        </Tr>
      )}
    </>
  );
};

export default PlayerStatRow;
