import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getMenu() {
    return this.afs.collection('menu');
  }
}
