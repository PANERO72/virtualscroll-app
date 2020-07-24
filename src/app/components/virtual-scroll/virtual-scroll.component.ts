import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  goToEnd(){
    this.viewport.scrollToIndex(this.personas.length);
  }

  goToHalf(){
    if(this.personas.length === null){
      alert(this.personas.length);
    }else{
      this.viewport.scrollToIndex(this.personas.length / 2);
    }
  }

  goToStart(){
    this.viewport.scrollToIndex(0);
  }

}
