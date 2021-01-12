import { Injectable } from '@angular/core';

//1.- importamos firestore para poder guardar nuestros datos en la base de datos de firebase
import { AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //inyectamos servico
  constructor(
    public firestore:AngularFirestore
  ) { }

   /**
   * creamos metodo para las funciones crud de nuestra aplicacion
   * CRUD de firebase
  */
 getProductos(){
  return this.firestore.collection("productos").snapshotChanges();
}

createProducto(producto:any){
  return this.firestore.collection("productos").add(producto);
}

updateProducto(id:any, producto:any){
  return this.firestore.collection("productos").doc(id).update(producto);
}

eliminarProducto(id:any){
  return this.firestore.collection("productos").doc(id).delete();
}
}
