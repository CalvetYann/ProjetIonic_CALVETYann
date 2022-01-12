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

  getBrand(id: string): any {
    return new Observable((obs) => {
      this.brandsRef.doc(id).get().subscribe((data) => {
        obs.next({ id: data.id, ...data.data() });
      });
    });
  }

  addBrand(brand: Brands): any {
    return new Observable((obs) => {
      this.brandsRef.add({ ...brand}).then(() => {
        obs.next();
      });
    });
  }

  updateBrand(brand: Brands): any {
    return new Observable((obs) => {
      this.brandsRef.doc(brand.id).update(brand);
      obs.next();
    });
  }

  deleteBrand(id: string): any {
    this.brandsRef.doc(id).delete();
  }
}
