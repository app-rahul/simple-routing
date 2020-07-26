import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common-components/not-found/not-found.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { NavigationBarComponent } from './common-components/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './common-components/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MasterLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    SettingPageComponent,
    NavigationBarComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
