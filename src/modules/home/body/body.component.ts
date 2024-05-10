import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { dataC } from '../home-template';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  scrolled = false;
  categoryData: dataC[] = [];
  @Output() isShadow = new EventEmitter<boolean>();
  constructor(public dataService: DataService) {}
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scrolled = event.target.scrollTop > 0;
    this.isShadow.emit(this.scrolled);
  }
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.categoryData = data;
    });
  }
}
