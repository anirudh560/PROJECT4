import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Carousel } from "./components/carousel/carousel";
import { Footer } from "./components/footer/footer";
import { Pages } from "./pages/pages";
import { Home } from "./pages/home/home";
import { Apiservice } from './apiservice';

@Component({
  selector: 'app-root',
  imports: [ Footer, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('angproject');
  constructor(private api:Apiservice){}
  ngOnInit(): void {
      this.api.getFakeStore().subscribe((res:any)=>{console.log(res)})
  }
}
