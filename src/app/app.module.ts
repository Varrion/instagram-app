import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageComponent} from './components/image/image.component';
import {ImageDetailsComponent} from './components/image/image-details/image-details.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbDropdown, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EditImageModalComponent} from './components/image/image-details/edit-image-modal/edit-image-modal.component';
import {DeleteImageModalComponent} from './components/image/image-details/delete-image-modal/delete-image-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddImageComponent} from './components/image/image-details/add-image/add-image.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageDetailsComponent,
    EditImageModalComponent,
    DeleteImageModalComponent,
    AddImageComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgbActiveModal, NgbDropdown],
  bootstrap: [AppComponent],
  entryComponents: [DeleteImageModalComponent, EditImageModalComponent]
})
export class AppModule {
}
