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
    let work3 = {
      fecha:"2022-2023",
      ubicacion:"Orizaba, Ver",
      puesto: "Backend Developer",
      empresa:"IntegriApp",
      descripcion: "Encargado del desarrollo de API haciendo uso de Python",
      logros: [
        "Integración al proyecto y nuevo framework aprendido"
      ]
    };
    let work4 = {
      fecha:"2022",
      ubicacion:"Cuernavaca, Mex",
      puesto: "IT suport",
      empresa:"Infinity Global Investment",
      descripcion: "Desarrollo de tareas de soporte  guía en tecnologías",
      logros: [
        "Implementación de un modelo de TI a los empleados"
      ]
    };

    this.workExperiencies.push(work1);
    this.workExperiencies.push(work2);
    this.workExperiencies.push(work3);
    this.workExperiencies.push(work4);
    }
  }

