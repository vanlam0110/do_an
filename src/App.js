import logo from './logo.svg';

import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Login2 from './components/Register';
import Createpost from './components/CreatePost'
const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login2',
		element: <Login2 />,
	},
	{
		path: '/createpost',
		element: <Createpost />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
