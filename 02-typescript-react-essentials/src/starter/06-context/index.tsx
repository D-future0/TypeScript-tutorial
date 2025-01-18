<<<<<<< HEAD
function Component() {
=======
import { useTheme, ThemeProvider } from "./context";

const ParentComponent = ()=>{
  return(
    <ThemeProvider><Component/></ThemeProvider>
  )
}
function Component() {
  const context = useTheme()
>>>>>>> 3214d0d (useReducer hook with typeScript)
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
<<<<<<< HEAD
    </div>
  );
}
export default Component;
=======
      <button className="btn btn-center" onClick={()=>{
        if(context.theme === `dark`){
          context.setTheme(`system`)
        }
        return context.setTheme(`dark`)
      }}>toggle</button>
    </div>
  );
}
export default ParentComponent;
>>>>>>> 3214d0d (useReducer hook with typeScript)
