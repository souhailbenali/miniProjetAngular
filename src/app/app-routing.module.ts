import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonnesComponent} from './personnes/personnes.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const routes: Routes = [
  {path: "personnes", component : PersonnesComponent},
  {path:"add-personne", component :AddPersonneComponent},
  {path: "updatePersonne/:id", component: UpdatePersonneComponent},
  { path: "", redirectTo: "personnes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
