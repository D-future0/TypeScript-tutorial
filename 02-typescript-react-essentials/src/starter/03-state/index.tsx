import { useState } from "react";

type link = {
  id:number;
  page:string;
}
const navLinks = [
  {
    id:1,
    page:`home`,
  },
  {
    id:1,
    page:`home`,
  },
]

function Component() {
  const [text, SetText] = useState("")
  const [links, setLinks] = useState<link[]>(navLinks)
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>State</h2>
      <button className="btn btn-center" onClick={()=>{
        SetText("hello")
        setLinks([...links, {id:3, page:`about`}])
        console.log(links)
        }}>click me</button>
    </div>
  );
}
export default Component;
