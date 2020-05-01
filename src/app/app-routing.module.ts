import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {
        path: 'products', component: ProductsComponent, children: [
          {path: 'product/:id', component: ProductsComponent}
        ]
      },
      {
        path: 'services', component: ServicesComponent, children: [
          { path: 'services/:id', component: ServicesComponent }
        ]
      },
      {
        path: 'blog', component: BlogPageComponent, children: [
          { path: 'blog/:id', component: BlogPageComponent }
        ]
      },
      {
        path: 'contacts', component: ContactsComponent
      },
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
