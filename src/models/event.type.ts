export type EventType = {
  event: string;
  coverGraphicUrl: string;
  eventNameGraphicUrl: string;
  description: string;
  venue: {
    img: string;
    name: string;
    address: string;
    gMapsLink: string;
  };
};
