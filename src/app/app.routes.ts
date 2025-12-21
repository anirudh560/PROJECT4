import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contactbar } from './components/contactbar/contactbar';
import { Contact } from './pages/contact/contact';
import { ProductDetail } from './pages/productdetails/productdetails';
import { ProductView } from './pages/product-view/product-view';

export const routes: Routes = [ 
    {
    path:"",
    component:Home
    },
    {
        path:"contact",
        component:Contact
    }
    ,
    {
        path:"product/:id",
        component:ProductDetail
    },
    {
        path:"page",
        component:ProductView
    }
];
