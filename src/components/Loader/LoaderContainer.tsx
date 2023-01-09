import { Flex } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const LoaderContainer = ({ children }: Props) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      top={0}
      left={0}
      bg="blackAlpha.300"
      backdropFilter="blur(2px)"
    >
      {children}
    </Flex>
  );
};

export default LoaderContainer;
