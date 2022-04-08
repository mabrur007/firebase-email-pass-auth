import './App.css';
import app from './firebase_init';
import { getAuth } from "firebase/auth";

const auth = getAuth(app)

function App() {

  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log('form submitted');
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onBlur={handleEmailBlur} type="email" placeholder='email'/>
        <input onBlur={handlePasswordBlur} type="password" placeholder='password' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
