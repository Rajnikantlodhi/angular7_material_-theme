import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeatailsComponent } from './components/deatails/deatails.component';
import { StartComponent } from './commonComponents/start/start.component';
import { HeaderthemsComponent } from './commonComponents/headerthems/headerthems.component';
import { HeaderComponent } from './commonComponents/headerthems/header/header.component';
import { ApplicationComponent } from './components/application/application.component';


const routes: Routes = [
//   { path : '' , component:StartComponent,
//   children:[
//     { path : '' , component: HomeComponent},
//   ]
// },

{ path : '' , component:HeaderthemsComponent,
children:[
  { path : 'details' , component: DeatailsComponent ,data : {animation:'isRight'}},
  { path : 'application', component: ApplicationComponent, data : {animation:'isLeft'}}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  