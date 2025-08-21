import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
	{ 
		path: 'users', 
		component: UsersListComponent 
	},
	
	{ 
		path: 'users', 
		component: HeaderComponent 
	},

];