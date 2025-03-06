import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component( {
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeLine.component.html',
  styleUrl: './timeLine.component.css'
})

export class TimelineComponent  {
  timelineItem = [
    {
      year: '2006',
      title: 'Los Inicios',
      description: 'Un grupo de amigos se reunía en el parque “La Cantera” y entrenaban porra encima de tapetes foamy.',
      expanded: false
    },
    {
      year: '2008',
      title: 'Primer Sucursal',
      description: 'Se inaugura el primer gimnasio en la privada Cedro 12 de Junio, únicamente con 7 líneas de matt.',
      expanded: false
    },
    {
      year: '2009',
      title: 'Mejoras',
      description: 'Se instalan las primeras 7 líneas de pódium.',
      expanded: false
    },
    {
      year: '2010',
      title: 'Worlds',
      description: 'Olympus asisté por primera vez a la competencia mundial Worlds con el equipo de porra OMEGA.',
      expanded: false
    },
    {
      year: '2013',
      title: 'Sucursal Americas',
      description: 'Con motivos de ampliación se cambio de sucursal, expandiendo así mismo la capacidad del gimnasio.',
      expanded: false
    },
    {
      year: '2015',
      title: 'Sucursal Periferico-Egipto',
      description: 'Se redujo la capacidad de sucursal Américas para abrir una segunda sucursal por el periférico de la juventud.',
      expanded: false
    },
    {
      year: '2016',
      title: 'Campeones Mundiales',
      description: 'Equipos escolares del gimnasio ganan el campeonato mundial de preparatorias.',
      expanded: false
    },
    {
      year: '2019',
      title: 'Cierre de una Sucursal',
      description: 'En enero del 2019 se tuvo que cerrar la sucursal de periférico-egipto.',
      expanded: false
    },
    {
      year: '2020',
      title: 'Pandemia',
      description: 'Debido a las circunstancias que atrajo la pandemia del COVID-19, nos vimos forzados a cerrar temporalmente la academia.',
      expanded: false
    },
    {
      year: '2021',
      title: 'Regreso a la Normalidad',
      description: 'Se reanudan actividades dentro del gimnasio para buscar una nueva instalación.',
      expanded: false
    },
    {
      year: '2022',
      title: 'Mejoras',
      description: 'Nos mudamos de instalación y se incorporo a nuestros programas la disciplina de gimnasia artística',
      expanded: false
    },
    {
      year: '2023',
      title: 'Worls',
      description: 'Se fue adquiriendo todo el equipamiento de gimnasia artística tanto femenil como varonil.',
      expanded: false
    },
    {
      year: '2025',
      title: 'Actualmente',
      description: 'Actualmente en olympus estamos documentando todo aquello pertinente a la organización en beneficio de sistematizar y estandarizar los procesos. Además de que se ha integrado la disciplina de telas. Seguimos equipando y preparando la instalación, así como también la continua búsqueda de capacitar profesionalmente a nuestros instructores.',
      expanded: false
    }

  ];




  toggleItem(index: number): void {
    this.timelineItem[index].expanded = !this.timelineItem[index].expanded
  }


}
