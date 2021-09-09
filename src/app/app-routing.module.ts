import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalamComponent } from './components/salam/salam.component'
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SewaComponent} from './components/sewa/sewa.component'
import { BukuNewFormComponent } from './components/buku/buku-new-form.component';

const routes: Routes = [
  {path:"", component:SalamComponent},
  {path:"buku", component:BukuComponent},
  {path:"pelanggan", component:PelangganComponent},
  {path:"sewa", component:SewaComponent},
  {path:"buku-new-form", component : BukuNewFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
