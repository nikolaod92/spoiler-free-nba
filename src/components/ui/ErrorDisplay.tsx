import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  const [close, setClose] = useState(false);

  return (
    <Flex
      maxW='fit-content'
      alignItems='center'
      display={close ? "none" : "flex"}
      px={4}
      py={1}
      bg='red.300'
      borderRadius={4}
      gap={12}
    >
      <Text color='gray.50'>{message}</Text>
      <CloseIcon
        onClick={() => setClose(true)}
        color='gray.50'
        fontSize={8}
        _hover={{ cursor: "pointer" }}
      />
    </Flex>
  );
};

export default Error;
