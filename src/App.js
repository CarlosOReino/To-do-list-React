import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div  className="container-sm p-5 my-5 bg-dark text-white shadow-box">
      <p className='h1 text-warning titulo-h1'>To Do List</p>
      <TodoList/>
    </div>
  );
}

export default App;
