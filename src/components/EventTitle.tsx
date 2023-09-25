import { Text, GridItem, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import { wrap } from "module";

const Elipse = chakra("div", {
  shouldForwardProp: (prop) => {
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;
    return ["active"].includes(prop);
  },
  baseStyle: {
    shadow: "sm",
    rounded: "full",
    width: "30px",
    height: "30px",
  },
});

interface EventTitleProps  {
    title: string;
    active?: boolean;
}

const EventTitle = ({ title, active = false }: EventTitleProps) => {
  return (
    <Flex
      width="100%"
      h="10"
      paddingRight={["15px", "15px", "15px", "50px", "50px"]}
    >
      <Flex
        width="100%"
        borderRight={[0, 0, 0, "2px solid gray", "2px solid gray"]}
        borderColor="gray.400"
        alignItems="center"
        justifyContent="space-between"
        height={20}
      >
        <Text
          color={active ? "red.500" : "blue.1000"}
          fontSize={["12px", "22px", "22px", "22px", "32px"]}
          fontWeight={700}
          minWidth={["120px", "120px", "120px", "auto", "auto"]}
          paddingRight={["15px", "15px", "15px", "50px", "50px"]}
          align="center"
        >
          {title}
        </Text>
        <Elipse
          display={["none", "none", "none", "block", "block"]}
          bgColor={active ? "red.500" : "gray.400"}
          minWidth={active ? "30px" : "20px"}
          width={active ? "30px" : "20px"}
          height={active ? "30px" : "20px"}
          marginRight={active ? "-15.5px" : "-10.5px"}
        />
      </Flex>
    </Flex>
  );
};
    export default EventTitle;