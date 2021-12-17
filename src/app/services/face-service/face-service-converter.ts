import { Face } from "src/app/models/face";
import { FaceGroup } from "src/app/models/face-group";
import { Attendance } from "./models/attendance";
import { Attendee } from "./models/attendee";
import { IdentificationStatus } from './models/identification-status';

export class FaceServiceConverter{
  public static convertAttendanceToFaceGroup(attendance: Attendance): FaceGroup{
    return {
      date: attendance.eventDate,
      faces: attendance.attendees.map(a => this.ConvertAttendeesToFaces(a))
    }
  }

  public static ConvertAttendeesToFaces(attendee: Attendee): Face{
    return {
      faceId: attendee.faceId,
      // firstName: attendee.firstName,
      isIdentified: attendee.identificationStatus == "Identified",
      fullName: attendee.name,
      isMember: true,
      pictureUrl: attendee.imageUrl,
      userConfirmed: false,
      confirmedBy: {
        firstName: "",
        lastName: "",
        userId: "",
        profilePictureUrl: ""
      },
      userUnsure: false
    }
  }
}
