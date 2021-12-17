import { Attendee } from "./attendee";

export class Attendance{
    constructor(
      public attendees: Attendee[],
      public eventDate: Date,
      public imageSources: string[],
      public serviceName: string) {
    }
}
