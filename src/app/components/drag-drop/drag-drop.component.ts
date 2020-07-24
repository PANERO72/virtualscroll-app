import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragdropComponent implements OnInit {

  paises: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(paises => {
      this.paises = paises;
    });
  }

  drop(evento: CdkDragDrop<any>){
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}
