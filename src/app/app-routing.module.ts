import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/common-components/not-found/not-found.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full'},
  { path: 'personal', component: MasterLayoutComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'setting', component: SettingPageComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
