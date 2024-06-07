import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HuaweiComponent} from "./components/huawei/huawei.component";

const routes: Routes = [
  {
    path: 'huawei',
    component: HuaweiComponent
  },
  {
    path: '**',
    redirectTo: 'huawei'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
