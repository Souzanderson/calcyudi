import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CockpitComponent } from './pages/cockpit/cockpit.component';
import { ListcoolerComponent } from './pages/listcooler/listcooler.component';
import { ListinoutComponent } from './pages/listinout/listinout.component';
import { ListmicroswComponent } from './pages/listmicrosw/listmicrosw.component';
import { ListmotorComponent } from './pages/listmotor/listmotor.component';
import { ListnivelComponent } from './pages/listnivel/listnivel.component';
import { ListtemperaturesComponent } from './pages/listtemperatures/listtemperatures.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "central", component: CockpitComponent },
  { path: "temperatures", component: ListtemperaturesComponent },
  { path: "level", component: ListnivelComponent },
  { path: "motor", component: ListmotorComponent },
  { path: "cooler", component: ListcoolerComponent },
  { path: "inout", component: ListinoutComponent },
  { path: "microswitch", component: ListmicroswComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
