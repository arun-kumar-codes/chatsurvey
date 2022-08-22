import './App.scss';
import SurveyChatBox from "./Pages/SurveyChatBox"
import Thankyou from './Pages/Thankyou';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<SurveyChatBox />} />
        <Route path="thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
}
export default App;
