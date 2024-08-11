import { HomeCardFeature } from "@/models/homeCardFeature";
import {
  MdPublic,
  MdRecordVoiceOver,
  MdOutlineTranslate,
  MdCode,
} from "react-icons/md";

export const HOME_CARD_FEATURES: Array<HomeCardFeature> = [
  {
    HeaderIcon: MdPublic,
    headerCaption: "homeContent.onlineAndInPerson",
    title: "homeContent.moreThan",
    bodyPart1: "19",
    bodyPart2: "homeContent.lastYear",
    bodyPart3: "events",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdRecordVoiceOver,
    headerCaption: "homeContent.nationalAndForeignSpeakers",
    title: "homeContent.over",
    bodyPart1: "25",
    bodyPart2: "homeContent.variousEvents",
    bodyPart3: "homeContent.experts",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdOutlineTranslate,
    headerCaption: "homeContent.englishAndSpanishWorkshops",
    title: "homeContent.multiLanguage",
    bodyPart1: "+1",
    bodyPart2: "homeContent.overTheYear",
    bodyPart3: "homeContent.activity",
    buttonCaption: "homeContent.seeMoreEvents",
  },
  {
    HeaderIcon: MdCode,
    headerCaption: "homeContent.hackathonsAndIdeathons",
    title: "homeContent.handsOnEvents",
    bodyPart1: "+2",
    bodyPart2: "homeContent.variousEvents",
    bodyPart3: "homeContent.perYear",
    buttonCaption: "homeContent.seeMoreEvents",
  },
];
