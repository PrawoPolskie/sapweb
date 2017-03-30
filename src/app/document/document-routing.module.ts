import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentListComponent } from './document-list.component';
import { DocumentComponent }     from './document.component';

const documentRoutes: Routes = [
  { path: 'eli',                component: DocumentListComponent },
  { path: 'eli/:db/:year/:pos', component: DocumentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(documentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentRoutingModule { }
