// import logo from './logo.svg';
import './App.sass';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/shared/header'
import Routes from './routes/routes.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
