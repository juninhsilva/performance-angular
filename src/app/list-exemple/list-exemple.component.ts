import { ExempleService } from './exemple-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exemple',
  templateUrl: './list-exemple.component.html',
  styleUrls: ['./list-exemple.component.scss']
})
export class ListExempleComponent implements OnInit {

  constructor(private exempleService: ExempleService) { }

  users: any = [];

  ngOnInit(): void {
    this.exempleService.getUsers()
    .subscribe((users) => {
      this.users = users;
    }
    )}

    trackById(index: number, item:any){
      return item.id;
    }

}
