import './App.css';
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";
import {useState} from "react";

function App() {
    let userName = useSelector(state => state.name);
    const [userNameSwitcher, setUserNameSwitcher] = useState(true);

    return (
        <div className="App">
            <Header></Header>
            {
                userName === 'noname' && userNameSwitcher === true ? <Auth userNameSwitcher={userNameSwitcher} setUserNameSwitcher={setUserNameSwitcher()}></Auth> : <input type="text"/>
            }
        </div>
    );
}

export default App;
