
import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arr:any[]=[];
  arr1:any[]=[];

  constructor(private platform:Platform) {
    this.platform.ready().then(()=>{
    for(var i =0;i<100;i++)
    {
      var obj = {name:"name"+i,
    mobilenumber:"mobilenumber"+i};
    this.arr.push(obj);
    }
    this.arr1 = this.arr;
  })
  }
  filterArray(ev:any){
    this.arr = this.arr1;
    const val =ev.target.value;
    if(val && val.trim() != "")
    {
      this.arr = this.arr1.filter((item)=>{
        return (item.name.toLowerCase().indexof(val.toLowerCase()) > -1 || item.mobilenumber.toLowerCase().indexof(val.toLowerCase()) > -1 )
      })
    }
  }
}
