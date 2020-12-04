import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ListtemperaturesComponent } from './pages/listtemperatures/listtemperatures.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListnivelComponent } from './pages/listnivel/listnivel.component';
import { ListmotorComponent } from './pages/listmotor/listmotor.component';
import { ListcoolerComponent } from './pages/listcooler/listcooler.component';
import { ListinoutComponent } from './pages/listinout/listinout.component';
import { ListmicroswComponent } from './pages/listmicrosw/listmicrosw.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CockpitComponent } from './pages/cockpit/cockpit.component';
import {LinechartComponent} from './components/linechart/linechart.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListtemperaturesComponent,
    ListnivelComponent,
    ListmotorComponent,
    ListcoolerComponent,
    ListinoutComponent,
    ListmicroswComponent,
    LoginComponent,
    SpinnerComponent,
    CockpitComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
