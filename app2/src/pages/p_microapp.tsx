import { Button, Drawer, Modal, Space } from "antd";
import { useState } from "react";

const PageMA: React.FC = () => {

    // window.microApp.addDataListener((data:any) => {
    //     console.log(data)
    //     data.fn("子组件")
    // }, () => {

    // })
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
 
    return (
      <Space>
        <p>你好，我是app2 -- page MICRO-APP</p>
        <Button type="primary" onClick={showDrawer}> OpenDrawer </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        <Button onClick={() => {
           Modal.success({
            closable:true,
            title:"ssssssss"
           })
        }}>弹出遮罩层</Button>
        <Button onClick={() => {
          const data = window.microApp.getData()
           console.log(data )
           data.fn("子组件")
        }}>获取基座数据，执行基座回调函数</Button>
        <Button onClick={() => {
          // 数据没有变化，基座没有响应
            window.microApp.dispatch({type: '子应用发送的数据'+ new Date()})
        }}>提交给基座数据</Button>
      </Space>
    );
  };
  
  export default PageMA;
  