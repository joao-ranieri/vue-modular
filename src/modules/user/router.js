import Module from './Module.vue';
import UserList from './views/UserList.vue';
import User from './views/User.vue';

export default {
	path: '/users',
	component: Module,
	children: [
		{
			path: '/users',
			component: UserList
		},
		{
			path: ':id',
			component: User
		}
	]
}