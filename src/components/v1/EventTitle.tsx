import {
  Text,
  Flex,
  chakra,
  shouldForwardProp,
  useMediaQuery,
} from "@chakra-ui/react";

const Elipse = chakra("div", {
  shouldForwardProp: (prop) => {
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;
    return ["active"].includes(prop);
  },
  baseStyle: {
    shadow: "sm",
    rounded: "full",
    width: "40px",
    height: "40px",
  },
});

interface EventTitleProps {
  title: string;
  active?: boolean;
}

const EventTitle = ({ title, active = false }: EventTitleProps) => {
  return (
    <Flex
      id="some-id"
      borderRight={[0, 0, 0, "2px solid gray", "2px solid gray"]}
      borderColor="gray.400"
      alignItems="center"
      flexDirection="row"
      justifyContent={["center", "center", "space-between", "space-between"]}
      minW={[0, 0, 0, "100%"]}
      w="40px"
      minH="40px"
    >
      <Text
        color={active ? "red.500" : "blue.1000"}
        fontSize={["xs", "sm", "xl", "2lg", "3xl"]}
        fontWeight={700}
        minWidth="auto"
        align="center"
        mb={5}
      >
        {title}
      </Text>
      <Elipse
        bgColor={active ? "red.500" : "gray.400"}
        width={active ? "30px" : "25px"}
        height={active ? "30px" : "25px"}
        marginRight={active ? "-15.5px" : "-13.5px"}
      />
    </Flex>
  );
};
export default EventTitle;
