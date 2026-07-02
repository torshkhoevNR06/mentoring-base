import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { User } from './users-list.interface';
import { HeaderComponent } from "../layout/header.component";

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrl: './users-list.component.scss',
	standalone: true,
	imports: [RouterOutlet, NgFor, HeaderComponent],
})

export class UsersListComponent {
	readonly apiService = inject(HttpClient)
	users: User[] = [];

	constructor() {
		this.apiService
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.users = response;
        console.log('USERS: ', this.users);
      });
	}

	deleteUser(id: number) {
		this.users = this.users.filter(
			item => item.id !== id
		)
	}
}

