import logo from './logo.svg';
import './App.css';
import InputUserName from "./components/UI/InputUserName/InputUserName";
import Button from "./components/UI/Button/Button";
import Settings from "./components/UI/Settings/Settings";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Auth></Auth>
    </div>
  );
}

export default App;
