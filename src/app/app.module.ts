import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuButtonsComponent } from './header/menu-buttons/menu-buttons.component';
import { LoginComponent } from './header/login/login.component';
import { SiteNameComponent } from './header/site-name/site-name.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuButtonsComponent,
    LoginComponent, 
    SiteNameComponent, FooterComponent, GameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
