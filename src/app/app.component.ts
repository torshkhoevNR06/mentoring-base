import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgIf, NgFor, RouterLink, HeaderComponent, BannerComponent, MainComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'mentoring-first-project';
	
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
