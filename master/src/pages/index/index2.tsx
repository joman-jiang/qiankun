

import useGlobalState from "@/globalState";
import { PageContainer } from "@ant-design/pro-components";
import { Access, MicroAppWithMemoHistory, useAccess } from "@umijs/max";
import { Button, Result } from "antd";

const Index1: React.FC = () => {

  const access = useAccess();

  const { globalState, setGlobalState } = useGlobalState({
    slogan: 'Hello MicroFrontend1111111111',
    permissions: ["ddd", "sss"],
    userId: 5,
  })
  return <PageContainer title={false}>
    <Access accessible={access.canAdmin === true} fallback={<Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" href="http://localhost:8000/">
          Back Home
        </Button>
      }
    />}>
      <MicroAppWithMemoHistory name="app2" url="/app2/page2" globalState={globalState}
        setGlobalState={setGlobalState} />
      <br />
      <MicroAppWithMemoHistory name="app2" url="/app2/userSelect" globalState={globalState && {
        onSelect:(v:any)=> {
          console.log(v)
          alert(v)
        }
      }}
        setGlobalState={setGlobalState} />
    </Access>
  </PageContainer>
}
export default Index1
