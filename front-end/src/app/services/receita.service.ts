import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receita } from './../model/receita.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  baseUrl = 'http://localhost:3333/recep'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(receita: Receita): Observable<Receita> {
    console.log('receita create', receita)
    return this.http.post<Receita>(this.baseUrl, receita)
  }
  read(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }
  readById(id: String): Observable<Receita>{
    const url = this.baseUrl+'/'+id
    console.log('get ', url)
    return this.http.get<Receita>(url)
  }
  update(receita: any) {
    const url = this.baseUrl + '/' + receita._id
    return this.http.put(url, receita)
  }

  delete(id: String) {
    const url = this.baseUrl
    return this.http.request('DELETE', url,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:  {_id: id }
    })
  }

}
