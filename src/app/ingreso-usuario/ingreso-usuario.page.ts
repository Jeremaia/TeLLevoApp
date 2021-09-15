import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {
  dato: string;
  constructor(private router: Router) { }
  
  iniciar(){
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}
    }
    console.log(this.dato);
    this.router.navigate(['/bienvenida'], navigationExtras)
  }

  recu(){
    //Utiliza API enrutada para llamar a la siguiente pag
    this.router.navigate(['/recup-contra'])
  }
  volver(){
    this.router.navigate(['/home'])

  }

  ngOnInit() {
  }

}
