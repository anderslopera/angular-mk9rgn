import { Component, OnInit } from "@angular/core";
import { r1 } from "../products";

@Component({
  selector: "app-my-resume",
  templateUrl: "./my-resume.component.html",
  styleUrls: ["./my-resume.component.css"]
})
export class MyResumeComponent implements OnInit {
  profile = r1.profile;

  constructor() {}

  ngOnInit() {}
}
