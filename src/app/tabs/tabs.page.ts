import { Component, OnInit } from '@angular/core';

export interface TabInterface {
	title: string;
	icon:string;
	path:any;
}

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.page.html',
	styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

	tabs: TabInterface[] = [
		{title: 'Tab - Villagers', icon: 'villagers', path: "villagers"},
		{title: 'Tab - Items', icon: 'villagers', path: "villagers"},
		{title: 'Tab - Fishs', icon: 'villagers', path: "villagers"},
		{title: 'Tab - Insects', icon: 'villagers', path: "villagers"}
	];

	constructor() { }

	ngOnInit() {
	}

	getTabs() {
		return this.tabs;
	}

}
