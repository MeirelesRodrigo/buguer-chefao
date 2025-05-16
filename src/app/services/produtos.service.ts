import { Injectable } from '@angular/core';
import { collectionData, Firestore} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Produtos_Request } from '../models/request/produtos.request';
import { Produtos_Response } from '../models/response/produtos.response';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  colecaoProdutos: any

  constructor(
    private firestore: Firestore
  ) { this.colecaoProdutos = collection(this.firestore, 'produtos') }


  listarProdutosMenu(): Observable<Produtos_Request[]>{
    return collectionData(this.colecaoProdutos, {
      idField: 'id'
    }) as Observable<Produtos_Response[]>
  }
}
