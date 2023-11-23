import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      <ClassClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* { <Greet name="Joel" heroname="Batman">
        <p>This is children props</p></Greet>
      <Greet name="Liam" heroname="Superman"/>
        { <button>Action</button> }
      <Greet name="Luke" heroname="Wonderwoman"/>
      <Welcome name="Joel" heroname="Batman"/>
      <Welcome name="Liam" heroname="Superman"/>
      <Welcome name="Luke" heroname="Wonderwoman"/> } */}
    </div>
  );
}

export default App;
