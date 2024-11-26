import { Provider } from "react-redux";
import FromComponent from "./components/FormComponent";
import store from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      hello
      <Provider store={store}>
        <FromComponent />
      </Provider>
    </div>
  );
}
