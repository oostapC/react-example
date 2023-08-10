import Header from './layout/header/Header';
import TodoModule from './pages/todo/TodoModule';
import './App.css';

function App() {
	return (
		<div className="container">
			<Header></Header>
			<TodoModule />
			
		</div>
	);
}

export default App;
