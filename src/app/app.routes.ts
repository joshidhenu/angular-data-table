import { Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { TableComponent } from './component/table/table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SplashComponent } from './splash/splash.component';

export const routes: Routes = [
   
     { path: '', component: DataTableComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'spalsh', component: SplashComponent },
    //  { path: 'card', component: CardComponent }

    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    // },
    // {
    //     path: 'splash',
    //     component: SplashComponent
    // },
     {
        path:'',
        component: DataTableComponent,
        children:[
            {
                path:'datatable',
                component: DataTableComponent
            }
        ]
    },
    {
        path:'card',
        component: CardComponent,
        children:[
            {
                path:'card',
                component: CardComponent
            }
        ]
    }
];