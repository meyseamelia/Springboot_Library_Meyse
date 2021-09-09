import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SalamComponent } from './components/salam/salam.component';

import { SqrtPipe } from './pipes/app.sqrt';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SewaComponent } from './components/sewa/sewa.component';
import { BukuDetailComponent } from './components/buku/buku-detail.component';
import { BukuNewFormComponent } from './components/buku/buku-new-form.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    SalamComponent,
    SqrtPipe,
    BukuComponent,
    PelangganComponent,
    SewaComponent,
    BukuDetailComponent,
    BukuNewFormComponent,
    MessageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
