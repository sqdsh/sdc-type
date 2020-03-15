/* jshint esversion: 6 */

let token:
    string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2MzIwMzA3Mjk5MDY0MjE4NiIsInBlcm1zIjowLCJpYXQiOjE1ODE3NTk3NDZ9.sSLJnNNeTPF4bOIEqWBlYAZyfJn_TZATUu0A3-I3txI";

import { SDC } from "./index";
import { IWarns } from "./interfaces";

const client = new SDC(token);
client.warns("484349834950737920")
    .then((data: IWarns) => console.log(`Пользователь с ID ${data.id} имеет ${data.warns} варнов.`));