import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'excel/split', pathMatch: 'full' },
  { path: 'excel/split', loadComponent: () => import('./excel/excel-split/excel-split.component').then(c => c.ExcelSplitComponent) },
  { path: 'text/compare', loadComponent: () => import('./text/text-compare/text-compare.component').then(c => c.TextCompareComponent) },
  { path: 'txt/split', loadComponent: ()=>import('./txt/txt-split/txt-split.component').then(c => c.TxtSplitComponent)}, 
  { path: 'txt/merge', loadComponent: ()=>import('./txt/txt-merge/txt-merge.component').then(c => c.TxtMergeComponent)}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
