import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unir-viaje',
  templateUrl: './unir-viaje.page.html',
  styleUrls: ['./unir-viaje.page.scss'],
})
export class UnirViajePage implements OnInit {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['/bienvenida'])
  }

  ngOnInit() {
  }

}
