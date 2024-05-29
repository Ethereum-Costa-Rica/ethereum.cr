import { ReactNode } from "react";
import { Flex, useBreakpoint } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapperCommunity = ({ children }: Props) => {
  const breakpoint = useBreakpoint();
  const _breakpoints = ["base", "xs", "sm", "md"];

  const checkBgInclusion1 = () => {
    return !_breakpoints.includes(breakpoint) ? "url('/hero1.svg')" : "";
  };

  const checkBgInclusion2 = () => {
    return !_breakpoints.includes(breakpoint) ? "url('/hero2.svg')" : "";
  };

  return (
    <Flex
      paddingTop={10}
      direction="column"
      justifyContent="space-evenly"
      position="relative"
    >
      <Flex
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        px={[25, 50, 90]}
        backgroundImage={checkBgInclusion2()}
        backgroundRepeat="no-repeat"
        backgroundSize="auto 75vh"
        backgroundPosition="95% 143%"
        zIndex={-1}
      />
      <Flex
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        px={[25, 50, 90]}
        backgroundImage={checkBgInclusion1()}
        backgroundRepeat="no-repeat"
        backgroundSize="auto 104vh"
        backgroundPosition="5% 100%"
        zIndex={-1}
      />
      {children}
    </Flex>
  );
};

export default BackgroundWrapperCommunity;
