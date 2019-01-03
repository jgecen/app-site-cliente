import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {ConfigService} from './services/config.services';
import {PessoaService} from './services/pessoa.service';
import { MenuComponent } from './pessoa/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
