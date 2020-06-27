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
import { Pipe, PipeTransform } from '@angular/core';
import { ClimaService } from './weather.service'

@Pipe({
  name: 'fechaANombreDia'
})
export class FechaANombreDiaPipe implements PipeTransform {
  constructor(private climaService: ClimaService) { }

  transform(fechaComoCadena): string {
    fechaComoCadena = this.climaService.parsearFecha(fechaComoCadena) + " 00:00:00";
    const dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];
    const numeroDia = new Date(fechaComoCadena).getDay();
    const nombreDia = dias[numeroDia];
    return nombreDia;
  }

}
