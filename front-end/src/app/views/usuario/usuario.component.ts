import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  alterar(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('Aletera')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }

}
