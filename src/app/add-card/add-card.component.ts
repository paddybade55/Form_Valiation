import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import Swal from 'sweetalert2';

const blank = '⠀'; // Braille Pattern Blank

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {
  title = '+ Add Credit/Debit Card'
  popup = true

  datemask = [/[0-1]/, /[1-2]/, '/', /[2-3]/, /\d/];
  // cardNumMask = [/\d/,/\d/,/\d/, /\d/, ' ', /\d/, /\d/, /\d/,/\d/, ' ',
  //                 /\d/,/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
  cvv = [/[0-9]/, /[0-9]/, /[0-9]/];

  // public type: any | "any";
  // public cardnumber: any;
  // public cardNumber: any = "";
  public mask = {
    placeholderChar: blank,
    mask: [
      /[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/, " ",
      /[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/, " ",
      /[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/, " ",
      /[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/
    ]
  };

  addCardForm = new FormGroup(
    {
      cardNumber : new FormControl('', [Validators.required, Validators.minLength(16)]),
      name : new FormControl('', [Validators.required , Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(40)]),
      expiryDate : new FormControl('', [Validators.required]),
      cvv : new FormControl('', [Validators.required, Validators.minLength(3)]),
      bank : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(40)]),
      check : new FormControl(false , [Validators.requiredTrue]),
    }
  );

  addCard() {
    if(this.addCardForm.valid){
      console.warn(this.addCardForm.value)
      // Swal.fire('', 'Card added Successfully..!', 'success');

      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes..!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '',
            'Card added Successfully..!',
            'success'
          )
        }
      })

    }
    else{
      Swal.fire('', 'please fill all required fields..!', 'error');

    }
  }
}
