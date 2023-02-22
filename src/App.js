// import logo from './logo.svg';
import './App.css';
// import { HookCounterTwo } from './Components/HookCounterTwo';
// import { HookCounterThree } from './Components/HookCounterThree';
// import UseStateArray from './Components/UseStateArray';
// import ClassCounterone from './Components/UseEffect/ClassCounterone';
// import { HookCounter } from './Components/UseEffect/HookCounter';
// import MouseMoveClass from './Components/UseEffect/MouseMoveClass';
// import { MouseMoveHook } from './Components/UseEffect/MouseMoveHook';
// import { MouseContainer } from './Components/UseEffect/MouseContainer';
// import IntervelClassCounter from './Components/UseEffect/IntervelClassCounter';
// import IntervalContainer from './Components/UseEffect/IntervalContainer';
// import { Datafetching } from './Components/DataFetching/Datafetching';
// import { DataFetchingtwo } from './Components/DataFetching/DataFetchingtwo';
// import { ComponentC } from './Components/UseContext/ComponentC';
import React from 'react';
import Counterone from './Components/UseReduce/Counterone';
import Countertwo from './Components/UseReduce/Countertwo';
import { MultipleUsereducer } from './Components/UseReduce/MultipleUsereducer';
// import { ParentComponent } from './Components/UseReduce/UseReduce&UseContext/ParentComponent';
import { DataFetching } from './Components/UseReduce/FetchDataUseReduce/DataFetching';
import { DataFetching2 } from './Components/UseReduce/FetchDataUseReduce/DataFetching2';
import { ParentComponent } from './Components/UseCallback/ParentComponent';
// import ClassCounter from './Components/ClassCounter';
// import HooksCounter from './Components/HooksCounter';

// export const UserContext = React.createContext();
// export const JobContext = React.createContext();

function App() {

  // const data=["munees","Adish","usu"]

  return (
    <div className="App">
      {/* <ClassCounter />
      <HooksCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <UseStateArray /> */}
      {/* <ClassCounterone />
      <HookCounter /> */}
      {/* <MouseMoveClass />
      <MouseMoveHook /> */}
      {/* <MouseContainer /> */}
      {/* <IntervelClassCounter /> */}
      {/* <IntervalContainer /> */}
      {/* <Datafetching /> */}
      {/* <DataFetchingtwo /> */}
      {/* <UserContext.Provider value={'Muhammed munees'}>
        <JobContext.Provider value={data} >
          <ComponentC />
        </JobContext.Provider>
      </UserContext.Provider> */}
      {/* <Countertwo /> */}
{/* <MultipleUsereducer /> */}
{/* <ParentComponent /> */}
{/* <DataFetching /> */}
{/* <DataFetching2 /> */}
<ParentComponent />
    </div>
  );
}

export default App;
