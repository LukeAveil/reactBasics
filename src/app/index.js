import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
  render() {
    var user = {
      name: "luke",
      hobbies: ["table tennis", "basketball"]
    };
    return (
      <div>
        <Header/>
        <Home name={"luke"} age={31} user={user}/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
