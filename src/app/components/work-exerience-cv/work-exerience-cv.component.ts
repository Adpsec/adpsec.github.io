import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exerience-cv',
  templateUrl: './work-exerience-cv.component.html',
  styleUrls: ['./work-exerience-cv.component.css']
})
export class WorkExerienceCvComponent implements OnInit {

  workExperiencies : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2021-2022",
      ubicacion : "San Luis Potoso",
      puesto:"Penetration Tester",
      empresa:"Cibera",
      descripcion: "Encargado de tareas de Pentesting en sitios web e infraestructuras",
      logros: [
        "Descubrimiento de XSS y SQLi en sitios web"
      ]
    };

    let work2 = {
      fecha:"2019-2022",
      ubicacion:"Acayucan, Ver",
      puesto: "Owner & Freelancer",
      empresa:"HackCode",
      descripcion: "Creador de una marca y comunidad en ciberseguridad y hacking para difundir conocimientos",
      logros: [
        "Creación de comunidad y marca en Hacking"
      ]
    };
    this.workExperiencies.push(work1);
    this.workExperiencies.push(work2);
    }
  }

