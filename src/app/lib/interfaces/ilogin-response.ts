import {IToken} from "@lib/interfaces/itoken";
import {IStudent} from "@lib/interfaces/student.interface";
import {IStaff} from "@lib/interfaces/istaff";

export interface ILoginResponse {
  user: IStudent | IStaff;
  token: IToken;
}
