// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeScreen from './Components/screens/HomeScreen';
import Ensayo from './Components/Ensayo';

function App() {
    return (
        <div className="App">
            <Router>
                <Ensayo></Ensayo>
                <Routes>
                    {/* <Route path="/" element={<HomeScreen />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
