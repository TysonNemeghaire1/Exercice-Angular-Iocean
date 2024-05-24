import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Title } from '../interfaces/title';
import { TitleServiceApiService } from '../services/title/title-service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subscription;
  titles: Title[];
  searchText: string;
  sortAsc = true;

  constructor(private titleService: TitleServiceApiService) {}

  ngOnInit(): void {
    this.destroy$ = this.titleService
      .getTitles()
      .subscribe((titles) => (this.titles = titles));
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  onChange(): void {
    this.sortAsc = !this.sortAsc;
  }
}
