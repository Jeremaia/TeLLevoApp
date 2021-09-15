import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {
  dato: any;
  constructor(private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato = this.router.getCurrentNavigation().extras.state.dato
        console.log(this.dato)
      }
    });

  }

  cerrar(){
this.router.navigate(['/ingreso-usuario'])

  }


}
