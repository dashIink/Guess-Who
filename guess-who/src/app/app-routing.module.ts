import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'upload', component: ImageUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
