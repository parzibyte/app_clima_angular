/*

    Programado por Luis Cabrera Benito 
  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
    
    Blog:       https://parzibyte.me/blog
    Ayuda:      https://parzibyte.me/blog/contrataciones-ayuda/
    Contacto:   https://parzibyte.me/blog/contacto/
*/
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
