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
}
