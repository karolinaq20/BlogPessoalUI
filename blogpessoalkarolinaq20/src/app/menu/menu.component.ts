import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foto = environment.foto
  nome = environment.nome
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.foto = ''
    environment.nome = ''
    environment.id = 0

  
  }

}

