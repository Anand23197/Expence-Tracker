import Welcome from "./Welcome";
import React from "react";

const App =()=>{
    let name = "anand";
    return (
      <Welcome name={name}/>
    );
}

export default App;