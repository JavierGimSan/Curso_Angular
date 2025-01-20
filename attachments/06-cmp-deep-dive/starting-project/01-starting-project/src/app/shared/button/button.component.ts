import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //Attribute selector. Al añadir este atributo a un elemento, el componente se hará activo en él. Además, se pueden usar varios selectores separándolos con comas.
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
}
