import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DocumentListComponent } from './document-list.component';
import { DocumentComponent }     from './document.component';

import { DocumentRoutingModule } from './document-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocumentRoutingModule
  ],
  declarations: [
    DocumentListComponent,
    DocumentComponent
  ],
  providers: [ ]
})
export class DocumentModule {}
