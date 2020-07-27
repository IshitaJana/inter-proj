import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  cards:string[];
  constructor()
  {
   this.cards=["Form 1","Form 2","Form 3","Form4","Form 5","Form 6","Form 7","Form 8","Form 9"]
  }

  ngOnInit(): void {
  }

}
