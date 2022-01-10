import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Brands } from './models/brands.model';

@Injectable({
  providedIn: 'root'
})

export class BrandsService {
  brandsRef: AngularFirestoreCollection<Brands>;
  private dbPath = '/brands';

  constructor(
    private db: AngularFirestore
  ) {
    this.brandsRef = this.db.collection(this.dbPath);
  }

  getAllBrands(): any {
    return this.brandsRef
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
