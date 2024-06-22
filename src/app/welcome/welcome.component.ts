import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  constructor(){

  }
  @ViewChild('name') nameKey!:ElementRef;
ngOnInit(): void {
  
}
login(){
  console.log()
  localStorage.setItem("name", this.nameKey.nativeElement.value)
}
}
