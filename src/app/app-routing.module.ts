import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"about", component:AboutComponent},
  {path:"service", component:ServiceComponent},
  {path:"menu", component:MenuComponent},
  {path:"contact", component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
