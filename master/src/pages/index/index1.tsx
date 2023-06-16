import { MicroAppWithMemoHistory } from "@umijs/max";
import { useState } from "react";

const Index1: React.FC = () => {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend1111111111',
  });
  return <MicroAppWithMemoHistory  name="app2" url="/app2/page2" globalState={globalState}
  setGlobalState={setGlobalState}/>;
}
export default Index1
