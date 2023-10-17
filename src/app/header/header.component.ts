import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() "childTitle" : string;
  @Input() "d1" : string;
  @Input() "myNumbers" : any;

  @Output() "cust" = new EventEmitter();
  message = "passed to parent"
  passToParent() {
    this.cust.emit(this.message);
  }
  updateMessage(e : any) {
    this.message = e.target.value;
  }

  dataView = "demo of ViewChild decorator";
  passToParentt() {
    return this.dataView;
  }

  constructor() {}

}
