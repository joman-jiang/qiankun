import { Access, useModel } from '@umijs/max';
import { Button, Result } from 'antd';
import { PropsWithChildren } from 'react';

export interface AccessProps {
  permission: string;
}

const AccessT: React.FC<PropsWithChildren<AccessProps>> = (props) => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  let permissions = masterProps.globalState.permissions;

  return (
    <Access
      accessible={permissions.indexOf(props.permission) != -1}
      fallback={
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button type="primary" href="http://localhost:8000/">
              Back Home
            </Button>
          }
        />
      }
    >
      <>{props.children}</>
    </Access>
  );
};

export default AccessT;
