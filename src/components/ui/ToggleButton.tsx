import { Button, ButtonProps, ComponentWithAs } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = ButtonProps & {
  data: [string, React.ReactNode];
};

const ToggleButton = ({ data, ...props }: Props) => {
  const [show, setShow] = useState(true);

  const [first, second] = data;

  return (
    <Button w={24} onClick={() => setShow(!show)} {...props}>
      {show ? first : second}
    </Button>
  );
};

export default ToggleButton;
