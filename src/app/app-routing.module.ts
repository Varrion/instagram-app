import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImageDetailsComponent} from './components/image/image-details/image-details.component';
import {ImageComponent} from './components/image/image.component';
import {AddImageComponent} from './components/image/image-details/add-image/add-image.component';

const routes: Routes = [
  {path: '', redirectTo: '/images', pathMatch: 'full'},
  {path: 'images', component: ImageComponent},
  {path: 'images/add', component: AddImageComponent},
  {path: 'images/:id', component: ImageDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

