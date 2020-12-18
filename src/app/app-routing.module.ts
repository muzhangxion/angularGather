import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: 'richtext',
    component: RichTextComponent,
    data: {
      title: '富文本'
    }
  },
  {
    path: 'test',
    component: TestComponent,
    data: {
      title: '测试'
    }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: {
      title: '测试'
    }
  },
  { 
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
