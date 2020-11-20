import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;

@Component({
  selector: 'app-resume-work-experience',
  templateUrl: './resume-work-experience.component.html',
  styleUrls: ['./resume-work-experience.component.css']
})
export class ResumeWorkExperienceComponent implements OnInit {
  @Input() profile ;

  constructor() { }

  ngOnInit() {
  }

}