import { Flex, Text } from "@chakra-ui/react";
import { Team } from "../../types";
import Logo from "../ui/Logo";

interface Props {
  team: Team;
  home?: boolean;
}

const TeamView = ({ team, home }: Props) => {
  return (
    <Flex gap={1} flex={1} justifyContent={home ? "flex-end" : "stretch"} alignItems='center'>
      <Flex order={home ? 2 : 1}>
        <Logo team={team.abbreviation} />
      </Flex>
      <Flex gap={2} order={home ? 1 : 2}>
        <Text display={{ base: "none", md: "flex" }}>{team.city}</Text>
        <Text
          display={{ base: "none", md: "flex" }}
          casing='uppercase'
          fontWeight='bold'
          color='gray.600'
        >
          {team.name}
        </Text>
        <Text
          display={{ base: "flex", md: "none" }}
          casing='uppercase'
          fontWeight='bold'
          color='gray.600'
        >
          {team.abbreviation}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TeamView;
