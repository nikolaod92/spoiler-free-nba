import {
  Image,
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} w="full">
      <Flex h={12} alignItems={"center"} justifyContent={"space-between"} w="4xl" m="auto">
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="black" color="#1D4289">
            Spoiler Free NBA
          </Text>
          <Image src="/nba-logo.png" w={10} />
        </HStack>
      </Flex>
    </Box>
  );
}
