import * as React from "react";
import { SimpleComponent } from "./examples/SimpleComponent";
import { UserInfo } from "./examples/UserInfo";

export const Home = () => {
  return (
    <div>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <SimpleComponent />
      <UserInfo name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
    </div>
  );
};
