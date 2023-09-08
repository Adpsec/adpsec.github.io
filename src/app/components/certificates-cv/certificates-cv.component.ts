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
      nombre: "Python Introduction",
      fecha: "2023",
      descripcion: "Introducción a python",
      Image: "/home/peter/Documentos/adpsec.github.io/src/assets/images/Adriel Peregrina - Python.png"
    }

    const cert2 = {
      nombre: "Python Pandas Introduction",
      fecha: "2023",
      descripcion: "Introdución al uso de librerías para datos con python",
      Image: "/home/peter/Documentos/adpsec.github.io/src/assets/images/Adriel Peregrina - Pandas.png"
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
