import 'rxjs/add/operator/switchMap';
import { Akoma }             from '../basex/akoma';
import { BasexService }      from '../basex/basex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,
         Router,
         Params }            from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  providers: [ BasexService ],
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  akoma: Akoma;
  akomaRaw;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BasexService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getDocumentById(params['db'],
                                                                  params['year'],
                                                                  params['pos']))
      .subscribe((akoma: Akoma) => {
        this.akoma = akoma;
        this.akomaRaw = akoma.data;
      });
  }
}
