import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }        from './about/about.component';
import { DocumentListComponent } from './document/document-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
