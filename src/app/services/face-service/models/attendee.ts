import { FaceLocation } from "./face-location";
import { FaceRectangle } from "./face-rectangle";
import { IdentificationStatus } from "./identification-status";
import { Submission } from "./submission";

export class Attendee{
    constructor(public adGroupId: string,
      public faceId: string,
      public faceLocation: FaceRectangle,
      public identificationConfidence: number,
      public identificationStatus: string,
      public imageName: string,
      public imageUrl: string,
      public name: string,
      public personId: string,
      public userDetails: string,
      public submission: Submission){}
}
