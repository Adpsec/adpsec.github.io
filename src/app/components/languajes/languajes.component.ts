import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languajes',
  templateUrl: './languajes.component.html',
  styleUrls: ['./languajes.component.css']
})
export class LanguajesComponent implements OnInit {

  languajes: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    const lang1 = {
      idioma: "Español",
      nivel: "Nativo"
    }


    const lang2 = {
      idioma: "Ingles",
      nivel: "B2 (Intermedio)"
    }

    this.languajes.push(lang1);
    this.languajes.push(lang2);
  }

}
