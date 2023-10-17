import { ReactNode } from "react";
import { Flex, useBreakpoint } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapperDay = ({ children }: Props) => {
  return (
    <Flex
      paddingTop={[1, 2, 10]}
      px={{ sm: 15, md: 30, lg: 90 }}
      direction="column"
      justifyContent="space-evenly"
    >
      {children}
    </Flex>
  );
};

export default BackgroundWrapperDay;
