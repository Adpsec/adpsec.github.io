import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    const hobbie1 = {
      nombre: "Ciberseguridad"
    }

    const hobbie2 = {
      nombre: "Ver series"
    }

    const hobbie3 = {
      nombre: "Musica"
    }

    const hobbie4 = {
      nombre: "Programar"
    }


    const hobbie5 = {
      nombre: "Cafe"
    }

    const hobbie6 = {
      nombre: "Psicología"
    }

    this.interests.push(hobbie1);
    this.interests.push(hobbie2);
    this.interests.push(hobbie3);
    this.interests.push(hobbie4);
    this.interests.push(hobbie5);
    this.interests.push(hobbie6);
  }
}
