
import style from "./App.module.css";
import { Main } from './components/main/main.jsx';
import { Header } from './layout/header/header.jsx';

function App() {


  return (
    
    <div className={style.container}>
      <Header />
      <Main />

    </div>

    
  );
}

export default App;
