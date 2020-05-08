import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: MainPageComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'products/:id', component: ProductPageComponent},
      { path: 'services', component: ServicesComponent },
      { path: 'service/:id', component: ServicePageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'article/:id', component: ArticlePageComponent },
      {path: 'contacts', component: ContactsComponent},
    ]
  },
  {
    path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
