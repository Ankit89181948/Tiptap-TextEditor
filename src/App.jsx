import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Content />
      </div>
    </div>
  );
}

export default App;
