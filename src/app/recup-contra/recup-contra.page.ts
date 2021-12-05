import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-recup-contra',
  templateUrl: './recup-contra.page.html',
  styleUrls: ['./recup-contra.page.scss'],
})
export class RecupContraPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

}
