import './App.css';
import Aside from './Components/Aside/Aside';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
        <div className="App" >
        <Navbar list="Home"></Navbar>
        <Aside></Aside>
        </div>
    );
}

export default App;