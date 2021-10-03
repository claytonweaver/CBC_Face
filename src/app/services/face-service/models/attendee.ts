import { FaceLocation } from "./face-location";

export class Attendee{
    faceIds: string[];
    faceLocation: FaceLocation;
    identificationConfidence: number;
    identificationStatus: string;
    imageName: string;
    name: string;
    personId: string;
}