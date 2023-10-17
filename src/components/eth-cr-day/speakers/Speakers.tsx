import {
  Flex,
  Text,
  Image,
  Box,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { SpeakersData } from "./data";
import { SpeakerType } from "../models";

const Speakers = () => {
  const [isLargerThan1210] = useMediaQuery("(min-width: 1210px)");

  const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    return (
      hasPrev && (
        <Button
          className="control-arrow"
          onClick={clickHandler}
          height="100%"
          bg="transparent"
        >
          <Image src="./ArrowLeft.svg" alt="Left" />
        </Button>
      )
    );
  };

  const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
    return (
      hasNext && (
        <Button
          className="control-arrow control-next"
          onClick={clickHandler}
          height="100%"
          bg="transparent"
        >
          <Image src="./ArrowRight.svg" alt="Right" />
        </Button>
      )
    );
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
      px={["15px"]}
    >
      <Flex direction="row" wrap="wrap" justify="center" my="10">
        <Text variant={["h2", "h2", "h1"]}>Conoce a los</Text>
        <Text variant={["h2", "h2", "h1"]} color="brand.primary">
          &nbsp;conferencistas
        </Text>
      </Flex>
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showArrows
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        width={isLargerThan1210 ? "1210px" : "100vw"}
      >
        {SpeakersData.map((speaker: SpeakerType, index: number) => (
          <Flex
            maxW="100%"
            key={index}
            direction="column"
            justify="center"
            alignItems="center"
            px={{ sm: 5, md: 10 }}
          >
            <Box mb={10} boxSize={["xs", "sm", "sm"]}>
              <Image
                borderRadius="3xl"
                src={`./speakers/${speaker.image}`}
                alt="Speaker"
              />
            </Box>
            <Flex
              direction="column"
              maxW="700px"
              wrap="wrap"
              w="auto"
              alignItems="center"
              justifyContent="center"
              bg="white"
              mx={{ sm: 0, md: "5", lg: "5" }}
            >
              <Text variant={["h3", "h2"]}>{speaker.name}</Text>
              <Text variant="subtitle" color="brand.primary" mb="4">
                {speaker.title}
              </Text>
              <Flex
                mt="7"
                mb="10"
                w="100%"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Text fontWeight="bold" variant="body" color="brand.primary">
                  Tema de exposición:{" "}
                </Text>
                <Text variant="body">&nbsp;{speaker.topic}</Text>
              </Flex>
              <Text
                w={["90%", "100%"]}
                variant="body"
                align={["left", "center"]}
                mb={5}
              >
                {speaker.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Speakers;
