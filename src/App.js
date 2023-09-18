import logo from './logo.svg';

import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Createpost from './components/CreatePost'
import PostManagement from './components/PostManagement';
import AdminHome from './admin/AdminHome';
import AdminUser from './admin/AdminUser';
import EditCreatePost from './components/EditCreatePost';
import EditUser from './components/EditUser';
import Admin from './admin/Admin';
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
		element: <Register />,
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
		path: '/adminhome',
		element: <AdminHome/>,
	},
	{
		path : '/adminuser',
		element: <AdminUser/>
	},
	{
		path: '/post-management/edit/:id',
		element: <EditCreatePost/>,
	},
	{
		path: '/edituser',
		element: <EditUser/>
	},
	{
		path: '/admin',
		element: <Admin/>
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
