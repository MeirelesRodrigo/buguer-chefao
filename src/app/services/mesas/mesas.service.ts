import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { ProdutoConsumido } from '../../models/request/produtos-consumidos.request';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(
    private firestore: Firestore
  ) { }

  adicionarProdutosMesa(codigoMesa: string, produto: ProdutoConsumido): Promise<any> {
    const ref = collection(this.firestore, `mesas/${codigoMesa}/consumidos`)
    return addDoc(ref, {
      ...produto,
      criadoEm: new Date()
    })
  }

  listarProdutosConsumidos(mesaId: string): Observable<ProdutoConsumido[]> {
    const ref = collection(this.firestore, `mesas/${mesaId}/consumidos`);
    return collectionData(ref, { idField: 'id' }) as Observable<ProdutoConsumido[]>;
  }
}
