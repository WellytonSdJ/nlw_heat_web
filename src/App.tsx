import styles from './App.module.scss'
import { MessageList } from './components/MessageList/index';
import { LoginBox } from './components/LoginBox/index';


function App() {

  return (
    <main className={styles.contentWrapper}>
      <MessageList/>
      <LoginBox/>
    </main>
  )
}

export {App};
