import logo from './logo.svg';

import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Login2 from './components/Register';
import Createpost from './components/CreatePost'
import PostManagement from './components/PostManagement';
import Admin from './admin/Admin';
import EditCreatePost from './components/EditCreatePost';
import EditUser from './components/EditUser';
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
	{
		path: '/post-management',
		element: <PostManagement/>,
	},
	{
		path: '/admin',
		element: <Admin/>,
	},
	{
		path: '/post-management/edit/:id',
		element: <EditCreatePost/>,
	},
	{
		path: '/edituser',
		element: <EditUser/>
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
