
import useGlobalState from "@/globalState";
import { MicroAppWithMemoHistory } from "@umijs/max";

const Index1: React.FC = () => {
  const {globalState, setGlobalState} = useGlobalState({
    slogan: 'Hello MicroFrontend1111111111',
    permissions:["ddd","sss"],
    userId:5
  })
  return <MicroAppWithMemoHistory  name="app2" url="/app2/page2" globalState={globalState}
  setGlobalState={setGlobalState}/>;
}
export default Index1
