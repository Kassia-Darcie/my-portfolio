import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from './pages/Home/Home';

const App = () => {
	return (
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	);
};

export default App;
