import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
constructor(private questionService:QuestionService){}

public name: string ="";
  ngOnInit(): void {
   this.name = localStorage.getItem("name")!;
   this.getAllQuestions();
  }

  getAllQuestions(){
    this.questionService.getJsonQuestion().subscribe(ele=>{
      console.log(ele)
    })
  }
}
