import { BrowserRouter as Router } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";

function App() {
  return (
    <Router>
      <div className="app-container"> <MainScreen /> </div>
    </Router>
  );
}

export default App;