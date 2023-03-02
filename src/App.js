import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello test test test Hi
      {`ENV: ${process.env.REACT_APP_NAME}`}
    </div>
  );
}

export default App;
