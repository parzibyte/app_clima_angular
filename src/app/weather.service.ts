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
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private RUTA_API_UBICACION = "https://freegeoip.app/json/";

  constructor() { }

  async obtenerDatosUbicacion() {
    const response = await fetch(this.RUTA_API_UBICACION);
    return await response.json();
  }

  async obtenerDatosDeClima(longitude: string, latitude: string) {
    const response = await fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`);
    return await response.json();
  }

  parsearFecha(value) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + "-" + mes + "-" + dia;
  }
}
