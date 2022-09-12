import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-cv',
  templateUrl: './certificates-cv.component.html',
  styleUrls: ['./certificates-cv.component.css']
})
export class CertificatesCvComponent implements OnInit {

  certificates : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    const cert1 = {
      nombre: "Diplomado en seguridad informatica ágil",
      fecha: "2021",
      descripcion: "Diplomado en seguridad informatica aplicando metodologías especificas"
    }

    const cert2 = {
      nombre: "Técnico en seguridad informatica (análisis de riesgos)",
      fecha: "2021",
      descripcion: "Capacitación enfocada e la estimación de los riesgos informaticos y su prevención"
    }

    const cert3 = {
      nombre: "Técnico en seguridad informatica/Servidores",
      fecha: "2019",
      descripcion: "Capacitación sobre procesos para securizar servidores y los peligros que corren"
    }

    this.certificates.push(cert1);
    this.certificates.push(cert2);
    this.certificates.push(cert3);
  }

}
