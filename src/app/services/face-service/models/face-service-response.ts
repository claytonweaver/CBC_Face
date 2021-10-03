import { Attendee } from "./attendee";

export class FaceServiceResponse{
    attendees: Attendee[];
    id: string;
    imageSources: string[];
    serviceName: string;
}