import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductsComponent,
    ServicesComponent,
    BlogPageComponent,
    ContactsComponent,
    ImageSliderComponent,
  ],
  imports: [
    QuillModule.forRoot({
      modules: {
        clipboard: {
          matchVisual: false
        }
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
