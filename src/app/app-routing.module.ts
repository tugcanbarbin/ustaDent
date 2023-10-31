import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full',  title: "Demo site" },
  { path: 'home', component: HomepageComponent ,  title: "Demo site" },
  // { path: 'about', component: AboutusComponent ,  title: "Demo site" },
  // { path: 'services', component: ServicesComponent ,  title: "Demo site" },
  // { path: 'contact', component: ContactComponent,  title: "Demo site"  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
