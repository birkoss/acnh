import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [{
	path: '',
	redirectTo: '/tabs/villagers',
	pathMatch: 'full'
},{
	path: 'villagers',
	children: [{
		path: '',
		loadChildren: () =>
		import('../villagers/villagers.module').then(m => m.VillagersPageModule)
	}]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsPageRoutingModule {}
