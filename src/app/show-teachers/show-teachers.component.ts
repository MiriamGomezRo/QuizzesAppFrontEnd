import { Component, OnInit } from '@angular/core';
import {ApiService} from  '../api.service'
@Component({
  selector: 'app-show-teachers',
  templateUrl: './show-teachers.component.html',
  styleUrls: ['./show-teachers.component.css']
})

export class ShowTeachersComponent implements OnInit {

  teachers
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAllTeachers().subscribe(res=>{
      this.teachers = res
    })
  }

}
