import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationExperiencies : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    const edu1 = {
      nombre: "Universidad Veracruzana",
      fecha: "2020-2024",
      carrera: "Ingeniería de Software"
    };

    this.educationExperiencies.push(edu1);
  }

}
