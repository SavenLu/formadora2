import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.page.html',
  styleUrls: ['./animais.page.scss'],
  imports: [IonicModule, NgIf]
})
export class AnimaisPage implements OnInit {
  fact: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  irParaHome(){
    this.router.navigate(["/home"])
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.loadCatFact()
  }

  endpoint = "https://catfact.ninja/fact"

  loadCatFact(){
    this.http.get(this.endpoint).subscribe((dado: any) => {
       this.fact = dado.fact
    })
  }

}
