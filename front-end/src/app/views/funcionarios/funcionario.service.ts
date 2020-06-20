import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'

// responssável por fazer requisições HTTP nas APIs
import { HttpClient } from '@angular/common/http';
import { Funcionario } from './funcionario.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:3333/medic'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseUrl, funcionario)
  }
}
