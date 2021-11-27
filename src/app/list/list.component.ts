import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CompatList } from '../models/compatlist';
import { Site } from '../models/site';
import { CompatlistService } from '../services/compatlist.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public compatList?: CompatList;
  // public headers: HttpHeaders;
  public filterUrl: string = '';
  private subscription?: Subscription;

  constructor(private compatlistService: CompatlistService) {}

  ngOnInit() {
    this.getCompatList();
  }

  getCompatList(): void {
    this.subscription = this.compatlistService.compatListState.subscribe(result => {
          this.compatList = result;
    }, error => console.error(error));
    this.compatlistService.getCompatList();
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
