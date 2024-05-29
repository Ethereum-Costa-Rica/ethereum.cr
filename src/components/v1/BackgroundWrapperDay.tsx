import { ReactNode } from "react";
import { Flex, useBreakpoint } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapperDay = ({ children }: Props) => {
  return (
    <Flex
      px={["20px", "20px", "20px", "20px", "70px"]}
      direction="column"
      justifyContent="space-evenly"
    >
      {children}
    </Flex>
  );
};

export default BackgroundWrapperDay;
