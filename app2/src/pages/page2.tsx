import AccessT from '@/components/AccessT';
import { Button, Space, message } from 'antd';
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

  return (
    <AccessT permission="ddd">
      <p>当前用户：{name}</p>
      <Space>
        <Button onClick={showParam}>查看接收的参数</Button>
        <Button onClick={callBackRequest}>请求父应用的弹出，并收到回调</Button>
      </Space>
    </AccessT>
  );
}
