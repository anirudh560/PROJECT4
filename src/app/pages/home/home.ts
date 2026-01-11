import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Carousel } from "../../components/carousel/carousel";
import { Footer } from "../../components/footer/footer";
import { Contactbar } from "../../components/contactbar/contactbar";

import { Banner2 } from "../../components/banner2/banner2";
import { Accordin } from "../../components/accordin/accordin";

@Component({
  selector: 'app-home',
  imports: [Contactbar, Banner2, Accordin],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
