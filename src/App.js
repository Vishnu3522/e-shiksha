import './App.css';
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
function App() {
  return (

    <div className="App">
       <Routes>
       <Route path="/" element={ <Home/> } />
       <Route path="/courses" element={ <Courses/> } />
       </Routes>

    </div>
  );
}

export default App;
