import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    }
    ,
    // {
    //     path:'',
    //     component:LandingPageComponent,
    //     children:[
    //         {
    //             // path:'dashboard',
    //             // component:"dashboard component"
    //         }
    //     ]

    // }


];
