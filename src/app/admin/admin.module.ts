import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from '../shared/auth.guard';
import { QuillModule } from 'ngx-quill';
import { SliderComponent } from './slider/slider.component'
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        AddServicesComponent,
        AddProductsComponent,
        AddArticleComponent,
        DashboardComponent,
        SliderComponent,
        EditProductComponent,
        OrdersComponent
    ],
    imports: [
        QuillModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    { path: 'login', component: LoginPageComponent },
                    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
                    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
                    { path: 'add-slider', component: SliderComponent, canActivate: [AuthGuard]},
                    { path: 'add-services', component: AddServicesComponent,canActivate: [AuthGuard] },
                    { path: 'add-products', component: AddProductsComponent, canActivate: [AuthGuard] },
                    { path: 'add-products/:id/edit', component: EditProductComponent, canActivate: [AuthGuard] },
                    { path: 'add-article', component: AddArticleComponent, canActivate: [AuthGuard] }
                ]
            }
        ])
    ],
    exports: [ 
        RouterModule
     ]
})

export class AdminModule {

}