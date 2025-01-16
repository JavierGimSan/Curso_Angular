import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>(); //Es una buena práctica poner el tipo de dato que se va a emitir. En este caso, un objeto tipo 'data', como hemos nombrado antes en el .ts del app-component.
  enteredInitialInvestment = signal('0'); //Aquí no hace falta especificar el tipo porque Typescript ya lo lee del predefinido.
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal ('5');
  enteredDuration = signal('10');


  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(), //si ponemos un '+' delante pasa de string a number.
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enteredInitialInvestment.set('0'); //Con esto seteamos el valor cada vez que pulsamos 'Calculate', es decir, cada vez que hacemos 'submit'.
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

}
