
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';

import { useState } from 'react';
const Index: React.FC = () => {

  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
    jsxCustomEvent, // 不需要的,主要是编辑器会自动去无效引用
    fn:(v:string) => {
      alert("parent:"+v)
    }
  });

  return <micro-app name='app2' url='http://localhost:8002/app2/pageMicroApp'  data={globalState}
  onDataChange={(d:any) => {
    console.log(d)
  }}
  ></micro-app>;
}
export default Index
