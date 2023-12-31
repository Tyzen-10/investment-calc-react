import { useState } from "react";
import UserInput from "./components/UserInput"
import Header from "./components/header"
import Results from "./components/Results";
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1000,
    expectedReturn : 6,
    duration : 10
});
const inputIsValid = userInput.duration>=1;
const changeHandler = (identifier,value) => {
  setUserInput(prevUserInput=>{
      return {
          ...prevUserInput,
          [identifier] : +value
      }
  })
}
  return (
    <>
    <Header></Header>
    <UserInput onChange={changeHandler} userInput={userInput}></UserInput>
    {!inputIsValid&&<p className="center">Duration cannot be zero.</p>}
    {inputIsValid&&<Results input={userInput}></Results>}
    </>
  )
}

export default App
