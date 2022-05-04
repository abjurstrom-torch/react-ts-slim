import * as React from "react";
import { IUser } from "../../classes/interfaces/IUser";

export const UserInfo = (props: IUser) => {
  return (
    <div>
      <h1>User Component</h1>
      Hello, <b>{props.name}</b>
      <br />
      You are <b>{props.age} years old</b>
      <br />
      You live at: <b>{props.address}</b>
      <br />
      You were born: <b>{props.dob.toDateString()}</b>
    </div>
  );
};
