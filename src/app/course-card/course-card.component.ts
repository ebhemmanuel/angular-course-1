import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
  @Input()
  course: Course;  

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();
  ngOnInit(): void {
  }
  onCourseViewed() {
    console.log('viewing the course');
    this.courseSelected.emit(this.course)
  }
}
