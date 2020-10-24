import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { FormatearFechaPipe } from './formatear-fecha.pipe';
import { FechaANombreDiaPipe } from './fecha-anombre-dia.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    FormatearFechaPipe,
    FechaANombreDiaPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
