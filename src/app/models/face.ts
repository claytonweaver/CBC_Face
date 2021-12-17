import { User } from "./user";

export class Face {
    faceId: string;
    isIdentified: boolean;
    fullName: string;
    isMember: boolean;
    pictureUrl: string;
    userConfirmed: boolean = false;
    confirmedBy?: User;
    userUnsure: boolean = false;
}
