import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cond-viaje',
  templateUrl: './cond-viaje.page.html',
  styleUrls: ['./cond-viaje.page.scss'],
})
export class CondViajePage implements OnInit {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['/bienvenida'])
  }

  ngOnInit() {
  }

}
