import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-matching',
  templateUrl: './add-matching.component.html',
  styleUrls: ['./add-matching.component.scss']
})
export class AddMatchingComponent implements OnInit {
  formData = {
    entrepriseName: '',
    entrepriseDescription: '',
    matriculeFiscale: '',
    productName: '',
    productType: 'a',
    productLogo: null,
    productPrice: '',
    contact: '',
    onMarket: false,
  };

  onLogoChange(event: any) {
    const file = event.target.files[0];
    this.formData.productLogo = file;
  }

  submitForm() {
    // Handle form submission here, e.g., send data to an API
    console.log(this.formData);
  }
  ngOnInit() {
    console.log('AddMatchingComponent initialized:');
  }
}
