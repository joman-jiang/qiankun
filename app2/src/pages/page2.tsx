import AccessT from '@/components/AccessT';
import { Button, Drawer, Space, message } from 'antd';
import { useState } from 'react';
import { useModel } from 'umi';

export default function Page() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  let {
    globalState: {
      modalInfo,
      initialState: {
        currentUser: { name },
      },
    },
  } = masterProps;

  const [open, setOpen] = useState(false);

  const showParam = () => {
    modalInfo(masterProps);
  };

  const callBackRequest = () => {
    modalInfo({
      callback: (o: any) => {
        message.info(o);
      },
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <AccessT permission="ddd">
      <p>当前用户：{name}</p>
      <Space>
        <Button onClick={showParam}>查看接收的参数</Button>
        <Button onClick={callBackRequest}>请求父应用的弹出，并收到回调</Button>
        <Button type="primary" onClick={showDrawer}> OpenDrawer </Button>
      </Space>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </AccessT>
  );
}
