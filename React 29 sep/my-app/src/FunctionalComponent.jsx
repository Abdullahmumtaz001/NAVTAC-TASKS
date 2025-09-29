

import React from "react";

/* with props method
export default function FunctionalComponent(props) {
  return (
    <div>
       <h1>Functional Component 1</h1> 
     
      <h2>
        My name is {props.name} and my second name is {props.secondName}
      </h2>
    </div>
  );
}   
*/


 export default function FunctionalComponent({ name,secondName }) {
  return (
    <div>
      {/* <h1>Functional Component 1</h1> */}
     
      <h2>
        My name is {name} and my second name is {secondName}
      </h2>
    </div>
  ); 
 }
