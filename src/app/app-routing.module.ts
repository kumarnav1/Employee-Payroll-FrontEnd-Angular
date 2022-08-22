import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dash-board.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"update/:Id",component:FormComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }