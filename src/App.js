import '../src/css/main.css';
import Displaytodos from './components/Displaytodos';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>What's The Plan For Today? </h1>
      <Todos />
      <Displaytodos/>
    </div>
  );
}

export default App;
