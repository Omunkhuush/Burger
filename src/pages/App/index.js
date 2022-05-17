import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerBuider from "../BurgerBuider";
function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuider />
      </main>
    </div>
  );
}

export default App;
