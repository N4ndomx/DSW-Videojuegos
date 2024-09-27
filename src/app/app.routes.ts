import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from './top-games/top-games.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'topgames', component: TopGamesComponent },
    { path: '', component: LandingPageComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }