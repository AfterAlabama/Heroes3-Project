import './App.scss';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<AppRouter />
			<Footer />
		</>
	);
};

export default App;
