import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  constructor(private router: Router) { }
  
  iniciar(){
    this.router.navigate(['/bienvenida'])
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
