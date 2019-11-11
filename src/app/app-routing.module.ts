import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component'
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },

  {
    path:'edit/:id',
    component: EditComponent
    }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
