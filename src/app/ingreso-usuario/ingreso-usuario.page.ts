import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProviderService } from 'src/app/provider.service'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {
  dato: string;
  constructor(private router: Router, private dbservise: ProviderService, private storage: Storage) { 
    var user1 = {
      nombre:'Jose',
      tipo:'Conductor',
      mail: '',
      clave:'asd123'
    }
  
    var user2 = {
      nombre:'Maria',
      tipo:'Pasajero',
      mail: '',
      clave:'asd321'
    }

    storage.set('user1', user1);
    storage.set('user2', user2)
    storage.get('user1').then((val) => {
      console.log(val)
      console.log(val.name)
    })
  }

  verificador(){
    this.storage.keys()
  }

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
