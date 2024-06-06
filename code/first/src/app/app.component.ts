import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name="sheer";
  // rollno=22;
  // marks=80;
  // url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTx_VzIEXhcuTDWEpKUsyTZCsfykrHvU2Sw&usqp=CAU";
  // src="https://keralakaumudi.com/web-news/en/2023/05/NMAN0413506/image/tiger.1.559435.jpg"
  // srcc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q8tDRNSGOaBOUTKecyfAAGzv-HR-Nv8Pag&usqp=CAU"

  // isDisable=false;

  // fun(){
  //   alert("hai siddu....!,how are you")
  // }



  count = 0
 
  incr()
  {
    
    this.count++
  }

  decr()
  {
    
        this.count--
      
    
  }
  reset()
  {
    this.count=0
  }

}


