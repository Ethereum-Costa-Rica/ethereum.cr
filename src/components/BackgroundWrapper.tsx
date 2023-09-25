import { ReactNode } from "react";
import { Flex, useBreakpoint } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: Props) => {
  const breakpoint = useBreakpoint();
  const _breakpoints = ["base", "xs", "sm", "md"];

  const checkBgInclusion = () => {
    return !_breakpoints.includes(breakpoint) ? "url('/hero.svg')" : "";
  };

  return (
    <Flex
      paddingTop={10}
      px={[25, 50, 90]}
      direction="column"
      justifyContent="space-evenly"
      backgroundImage={checkBgInclusion()}
      backgroundRepeat="no-repeat"
      backgroundSize="auto 104vh"
      backgroundPosition="80% 0%"
    >
      {children}
    </Flex>
  );
};

export default BackgroundWrapper;
