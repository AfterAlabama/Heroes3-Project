import './App.scss';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<AppRouter />
		</>
	);
};

export default App;
