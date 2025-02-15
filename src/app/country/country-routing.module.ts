import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'selector',
        component: SelectorPageComponent,
      },
      {
        path: '**',
        redirectTo: 'selector',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
