import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Ships } from './models/ships.model';

@Injectable({
  providedIn: 'root'
})

export class ShipsService {
  shipsRef: AngularFirestoreCollection<Ships>;
  private dbPath = '/ships';

  constructor(
    private db: AngularFirestore
  ) {
    this.shipsRef = db.collection(this.dbPath);
  }

  getAllShips(): any {
    return this.shipsRef
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((doc: any) => ({
            id: doc.payload.doc.id,
            ...doc.payload.doc.data(),
          }))
        )
      );
  }

  getShip(id: string): any {
    return new Observable((obs) => {
      this.shipsRef.doc(id).get().subscribe((data) => {
        obs.next({ id: data.id, ...data.data()});
      });
    });
  }

  addShip(ship: Ships): any {
    return new Observable((obs) => {
      this.shipsRef.add({ ...ship}).then(() => {
        obs.next();
      });
    });
  }

  updateShip(ship: Ships): any {
    return new Observable((obs) => {
      this.shipsRef.doc(ship.id).update(ship);
      obs.next();
    });
  }

  deleteShip(id: string): any {
    this.shipsRef.doc(id).delete();
  }
}
