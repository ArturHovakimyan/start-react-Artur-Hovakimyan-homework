import React from "react";
import Counter from "./component/counter";

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <>
        <Counter />
      </>
      
    )
  }
}
export default App