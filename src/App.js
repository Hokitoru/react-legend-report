import './App.css';
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";

function App() {
    let userName = useSelector(state => state.name);

    return (
        <div className="App">
            <Header></Header>
            {
                userName === 'noname' ? <Auth></Auth> : ''
            }
        </div>
    );
}

export default App;
