import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  /* An empty array that is responsible 
	to add a division */
	public items = []; 

	/* A two-way binding performed which 
	pushes text on division */
	public newCompany; 


	/* When input is empty, it will 
	not create a new division */
	public addToList() { 
		if (this.newCompany == '') { 
		} 
		else { 
			this.items.push(this.newCompany); 
			this.newCompany = ''; 
		} 
	} 
  }
