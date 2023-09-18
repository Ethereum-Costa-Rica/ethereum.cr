import { Text, GridItem, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";

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
    <GridItem colSpan={3} width="100%" h="10" paddingRight="150px">
      <Flex
        width="100%"
        borderRight="2px"
        borderColor="gray.400"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={20}
      >
        <Text
          color={active ? "red.500" : "blue.1000"}
          fontSize="30px"
          fontWeight={700}
          paddingRight="50px"
        >
          {title}
        </Text>
        <Elipse
          bgColor={active ? "red.500" : "gray.400"}
          width={active ? "30px" : "20px"}
          height={active ? "30px" : "20px"}
          marginRight={active ? "-15.5px" : "-10.5px"}
        />
      </Flex>
    </GridItem>
  );
};
    export default EventTitle;