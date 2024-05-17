import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const route:Routes = [
    {
        path: 'share/word',
        component: HomeComponent
    },
    { path: 'share/word', redirectTo: 'share/word', pathMatch: 'full' }

]
@NgModule(
    {
        imports: [RouterModule.forChild(route)],
        exports: [RouterModule]
    }
)

export class HomeRoutingModule{

}