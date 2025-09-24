import { HomeCardFeature } from "@/models/homeCardFeature";
import {
  MdPeople,
  MdMic,
  MdBusiness,
  MdLocationOn,
} from "react-icons/md";

export const HOME_CARD_FEATURES: Array<HomeCardFeature> = [
  {
    HeaderIcon: MdPeople,
    headerCaption: "homeContent.totalAttendees",
    title: "homeContent.totalAttendeesTitle",
    bodyPart1: "500+",
    bodyPart2: "homeContent.allEvents",
    bodyPart3: "homeContent.participants",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdMic,
    headerCaption: "homeContent.nationalAndForeignSpeakers",
    title: "homeContent.over",
    bodyPart1: "25+",
    bodyPart2: "homeContent.variousEvents",
    bodyPart3: "homeContent.experts",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdBusiness,
    headerCaption: "homeContent.sponsors",
    title: "homeContent.over",
    bodyPart1: "7+",
    bodyPart2: "homeContent.sponsors",
    bodyPart3: "homeContent.sponsorsLabel",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdLocationOn,
    headerCaption: "homeContent.educationalTechHub",
    title: "homeContent.positioning",
    bodyPart1: "Costa Rica",
    bodyPart2: "",
    bodyPart3: "",
    buttonCaption: "homeContent.seeMoreEvents",
  },
];
