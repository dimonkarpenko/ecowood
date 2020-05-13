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
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ArticleComponent } from './article/article.component';
import { SortingPipe } from './shared/sorting.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


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
    FooterComponent,
    ProductPageComponent,
    ServicePageComponent,
    ArticleComponent,
    SortingPipe
  ],
  imports: [
    BrowserAnimationsModule,
    NgxSpinnerModule,
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
