import { type PropsWithChildren } from "react";

type propsComponent = PropsWithChildren<{
  name:string;
  id:number
}>
// type propsComponent = {
//   name:string;
//   id:number
//   children?: React.ReactNode
// }
function Component(props:propsComponent) {
  return (
    <div>
      <h2>name : {props.name}</h2>
      <h2>id : {props.id}</h2>
      {props.children}
    </div>
  );
}
export default Component;
