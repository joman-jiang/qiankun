import { MicroApp } from "@umijs/max";
import { useState } from "react";

const Index: React.FC = () => {

  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
  });

  return <MicroApp name="app2" globalState={globalState}
  setGlobalState={setGlobalState}/>;
}
export default Index
