import { Component } from '@angular/core';
import { CompanyService } from 'src/app/shared/company.service';

@Component({
  selector: 'dummy-form',
  templateUrl: './dummy-form.component.html',
  styleUrls: ['./dummy-form.component.css']
})
export class DummyFormComponent {
  GenderData: any[] = ['Male', 'Female'];  
check = {  
        FirstName: '',  
        LastName: '',  
        address: '',  
        city: '',  
        state: '',  
        postcode: null,  
        Gender: null,  
}
constructor(private companyService:CompanyService)
{

}
submit()
{
  console.log(this.check);
  this.companyService.submit(this.check).subscribe(
    data=>console.log(data),
    err=>console.log(err)
  )
}


}