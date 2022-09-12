import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-cv',
  templateUrl: './skills-cv.component.html',
  styleUrls: ['./skills-cv.component.css']
})
export class SkillsCvComponent implements OnInit {

  skills : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let sk = {
      element: "Trabajo en equipo",
      
    };
    let sk1 = {
      element: "Microgestion",
      
    };
    let sk2 = {
      element: "Orientado a objetivos",
      
    };
    let sk3 = {
      element: "Centrado en el futuro",
      
    };
    let sk4 = {
      element: "Pensamiento Crítico",
      
    };
    let sk5 = {
      element: "Resiliencia",
      
    };
    let sk6 = {
      element: " Comunicación verbal y escrita",
      
    };
    let sk7 = {
      element: "Liderazgo",
      
    };
    let sk8 = {
      element: "Creatividad",
      
    };
    let sk9 = {
      element: "Disposición de tiempo",
      
    };
    this.skills.push(sk);
    this.skills.push(sk1);
    this.skills.push(sk2);
    this.skills.push(sk3);
    this.skills.push(sk4);
    this.skills.push(sk5);
    this.skills.push(sk6);
    this.skills.push(sk7);
    this.skills.push(sk8);
    this.skills.push(sk9);

  }

}
