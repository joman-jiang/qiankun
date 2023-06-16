import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div className={styles.container} style={{background:"red"}}>
        <p>你好，我是app2 -- home</p>
      </div>
  );
};

export default HomePage;
