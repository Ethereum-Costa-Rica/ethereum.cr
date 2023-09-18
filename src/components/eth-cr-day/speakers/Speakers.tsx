import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { SpeakersData } from "./data";
import { SpeakerType } from "../models";

const Speakers = () => {
  const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    return (
      hasPrev && (
        <Button
          className="control-arrow"
          onClick={clickHandler}
          height="100%"
          bg="transparent"
        >
          <Image src="./ArrowLeft.svg" />
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
          <Image src="./ArrowRight.svg" />
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
    >
      <Flex direction="row" mb="6">
        <Text variant="h1">Conoce a los</Text>
        <Text variant="h1" color="brand.primary">
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
      >
        {SpeakersData.map((speaker: SpeakerType, index: number) => (
          <Flex key={index} direction="row" justify="center">
            <Box boxSize="md">
              <Image
                borderRadius="full"
                src={`./speakers/${speaker.image}`}
                alt="Speaker"
              />
            </Box>
            <Flex
              direction="column"
              maxW="50%"
              alignItems="center"
              justifyContent="center"
              bg="white"
              mx="8"
            >
              <Text variant="h2">{speaker.name}</Text>
              <Text variant="subtitle" color="brand.primary" mb="4">
                {speaker.title}
              </Text>
              <Text variant="body" align="center">
                {speaker.description}
              </Text>
              <Flex
                mt="4"
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
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Speakers;
