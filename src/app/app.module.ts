import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { BannerArticleComponent } from './banner-article/banner-article.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';

// Definir rutas
const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    HeroComponent,
    BannerArticleComponent,
    HeroHomeComponent,
    FooterComponent,
    AboutInfoComponent,
    AboutHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
