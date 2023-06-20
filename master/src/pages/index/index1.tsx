import useGlobalState from "@/globalState";
import { MicroAppWithMemoHistory } from "@umijs/max";

const Index: React.FC = () => {

  const {globalState, setGlobalState} = useGlobalState({
    slogan: 'Hello MicroFrontend1111111111',
    permissions:["ddd","sss"],
    userId:5
  })

  // return <MicroApp name="app1" globalState={globalState}
  // setGlobalState={setGlobalState}/>

  return <MicroAppWithMemoHistory  name="app1" url="/app1/about" globalState={globalState}
  setGlobalState={setGlobalState}/>
}
export default Index
