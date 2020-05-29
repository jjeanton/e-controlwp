import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getProducts() {
    return this.afs.collection('products');
  }

  getInfo() {
    return this.afs.collection('info').doc('e-control');
  }
}
