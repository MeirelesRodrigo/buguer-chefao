import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { ProdutoConsumido } from '../../models/request/produtos-consumidos.request';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
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

  async removerProdutoMesa(codigoMesa: string, produto: ProdutoConsumido): Promise<any> {
    if (!produto.id) return;

    const ref = doc(this.firestore, `mesas/${codigoMesa}/consumidos/${produto.id}`);

    if (produto.quantidade > 1) {
      await updateDoc(ref, { quantidade: produto.quantidade - 1 });
    } else {
      await deleteDoc(ref);
    }
  }

  listarProdutosConsumidos(codigoMesa: string): Observable<ProdutoConsumido[]> {
    const ref = collection(this.firestore, `mesas/${codigoMesa}/consumidos`);
    return collectionData(ref, { idField: 'id' }) as Observable<ProdutoConsumido[]>;
  }
}
