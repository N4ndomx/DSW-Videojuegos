import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from './top-games/top-games.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'topgames', component: TopGamesComponent },
    { path: '', component: LandingPageComponent },
    { path: 'footer', component: FooterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }