import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  jsonData:any[];
  

  constructor() {
    this.initializeJSONData();
}
FilterJSONData(ev:any){
  this.initializeJSONData();
  const val =ev.target.value;
  if(val && val.trim() != ''){
    this.jsonData = this.jsonData.filter((item) => {
      return (item.name.toLowerCase().indexof(val.toString().toLowerCase()) > -1);
    })
  }
}
initializeJSONData(){
  this.jsonData = [
    {
      "name":"Riddhi",
      "code":"ri"
    },
    {
      "name":"Rishi",
      "code":"hr"
    },
    {
      "name":"amy",
      "code":"my"
    }];
}
}
