import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-layout-footer',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterOutlet, AppComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
readonly headerNavA1 = 'Главная';
	readonly headerNavA3 = 'Каталог';
	readonly headerIineNavButton1 = upperCaseMenuItems[0];
	readonly newPages = newPages;

	menuItems = upperCaseMenuItems;
	aboutCompany = finctionAboutResult;
	isShowCotalog = true;
	isShowBanner = true;
	isUpperCase = true;
	changeMenuText() {
		this.menuItems = upperCaseMenuItems.map(
			item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
		)
		this.isUpperCase = !this.isUpperCase;
	}

	onClick(event: Event) {
		event.preventDefault();
	}
}

const finctionAboutCompany = (string: string) => {
	return string;
}
const finctionAboutResult = finctionAboutCompany('О компании');
console.log(finctionAboutResult);

const newPages = [5, 4, 3, 2, 1];

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItems = menuItems.map(
	(item) => {
		return item.toUpperCase();
	}
)
console.log(upperCaseMenuItems);
