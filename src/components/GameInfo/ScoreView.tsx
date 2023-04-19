import { Box, Flex, HStack, Text } from "@chakra-ui/react";

interface Props {
  home: number;
  away: number;
  status: string;
  show: boolean;
}

const Score = ({ home, away, status, show }: Props) => {
  return (
    <HStack justifyContent='center' backgroundColor='gray.200' mx={2} w={24} borderRadius={4}>
      {show ? (
        <Flex gap={2}>
          <Text fontSize={22} fontWeight='bold' color={home > away ? "green.500" : "gray.500"}>
            {home}
          </Text>
          <Text fontSize={22} fontWeight='bold' color={home < away ? "green.500" : "gray.500"}>
            {away}
          </Text>
        </Flex>
      ) : (
        <Text fontWeight='bold' color='gray.500'>
          {new Date(status).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
      )}
    </HStack>
  );
};

export default Score;
