import { Image, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} w='full'>
      <Flex
        h={12}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW='4xl'
        m='auto'
        px={{ base: 4, lg: 0 }}
      >
        <Text fontSize='xl' fontWeight='black' color='#1D4289'>
          Spoiler Free NBA
        </Text>
        <Image src='/nba-logo.png' w={10} />
      </Flex>
    </Box>
  );
}
