import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})

export class Card implements OnInit{
  card: any[] = [];
  constructor(
    private api_serv: Apiservice,
    private cdr: ChangeDetectorRef,
    private router:Router,

  ) { }
  ngOnInit(): void {
      this.api_serv.getFakeStore().subscribe((data:any)=>
      {
        console.log(data);
        this.card=data.products;
        this.cdr.detectChanges();
      })
  }
  viewproduct(product:any){
    this.router.navigate(["/product",product.id],{state:{product}})
  }

}