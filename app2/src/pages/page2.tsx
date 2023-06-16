import { useModel } from 'umi';
 
export default function Page() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
};