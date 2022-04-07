import './App.css';
import app from './firebase_init';
import { getAuth } from "firebase/auth";

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <input type="text" name="" id="" />
      <input type="password" name="" id="" />
    </div>
  );
}

export default App;
