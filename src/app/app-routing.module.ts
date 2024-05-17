import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth-module/auth-module.module').then(m=>m.AuthModuleModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home-module/home.module').then(m=>m.HomeModule)
  },
  { path: '', redirectTo: '/home/share/word', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
