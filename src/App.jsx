import { useEffect } from "react";
import Alert from "./Alert";
import Form from "./Form";
import useEmailContext from "./hook/useEmailContext";

function App() {
  const {state} = useEmailContext()

  return (
    <main className="w-full h-screen flex justify-center items-center bg-[#36384e]">
     {!state.email && <Form />}
    {state.email && <Alert email={state.email}/>}
    </main>
  );
}

export default App;
