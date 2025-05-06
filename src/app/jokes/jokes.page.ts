import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
  imports: [IonicModule, NgIf]
})
export class JokesPage implements OnInit {
  joke: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  irParaHome(){
    this.router.navigate(["/home"])
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.loadChuckyJokes()
  }

  endpoint = "https://api.chucknorris.io/jokes/random"

  loadChuckyJokes(){
    this.http.get(this.endpoint).subscribe((dado: any) => {
       this.joke = dado.value
    })
  }

}
