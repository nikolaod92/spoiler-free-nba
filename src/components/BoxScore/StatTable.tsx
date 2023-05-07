import { TableContainer, Thead, Tr, Th, Tbody, Table } from "@chakra-ui/react";
import { Stats } from "../../types";
import { TeamAbbreviation } from "../ui/Logo";
import StatTableRow from "./StatTableRow";

type Props = {
  stats: Stats[];
  display: TeamAbbreviation | "all";
};

const headerStats = [
  "Pts",
  "Reb",
  "Ast",
  "Fg",
  "3pt",
  "Ft",
  "Blk",
  "Stl",
  "TO",
  "PF",
  "Min",
  "GSc"
];

const StatTable = ({ stats, display }: Props) => {
  const playersToDisplay = stats.filter((player) => {
    if (display === "all") return player;
    return player.team.abbreviation === display;
  });

  return (
    <TableContainer overflowX='unset' overflowY='unset'>
      <Table variant='simple' size='sm'>
        <Thead position='sticky' top={0} zIndex='docked' bg='white'>
          <Tr>
            <Th></Th>
            {headerStats.map((stat) => (
              <Th key={stat} isNumeric>
                {stat}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {playersToDisplay.map((player) => {
            return Number(player.min) > 0 ? (
              <StatTableRow key={player.id} playerStats={player} />
            ) : null;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StatTable;
