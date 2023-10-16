import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  // String interpolation
  path:string ='../assets/flag.jpg';
  cName : string = 'special test';
  date:string = new Date().toLocaleTimeString();

  time = setInterval(() => {
    this.date = new Date().toLocaleTimeString();
  },1000);

  test(){
    return 10;
  }

  // Property or Attribute Binding
  isDisabled :boolean = false;

  // Class Binding
  isActive : boolean = true;
  apply : boolean = true;

  // Style Binding 
  colorVar = "rgb(243, 122, 142)";
  colorVar2 ="green"
  myStyle : object = {
    color:'white',
    background : 'blue',
    border : '5px solid gray'
  };

  // Event Binding
  counter : number = 0;
  increment(){
    this.counter += 1;
  }
  decrement(){
    this.counter -= 1;
  }

  name : string = "abc";
  changeName(event:any) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.name = event.target.value;
  }

  // Two Way Data Binding
  city :string = "Hyd";

  updateCity() {
    this.city = "BVRM";
  }

  // ngIf
  show = true;

  // check ngIf with empty data variable
  // data = "";
  data = ['A','B','C','D','E'];

  // ngFor
  movies =['A','B','C'];

  // ngSwitch

}
