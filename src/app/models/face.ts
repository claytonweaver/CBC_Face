import { User } from "./user";

export class Face {
    faceId: string;
    isIdentified: boolean;
    firstName: string;
    lastName: string;
    isMember: boolean;
    pictureUrl: string;
    userConfirmed: boolean;
    confirmedBy?: User;
}