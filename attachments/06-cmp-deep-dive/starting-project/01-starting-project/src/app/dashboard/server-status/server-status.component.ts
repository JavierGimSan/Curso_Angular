import { AfterViewInit, Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'> ('offline'); 
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; //Si definimos explícitamente el tipo de datos que acepta, nos avisará si al hardcodearlo nos equivocamos.
  // private interval?: NodeJS.Timeout; SetInterval devuelve un 'NodeJS.Timeout, que es como un ID. Lo usaremos en el OnDestroy para eliminar la fuinción una vez desaparezca su componente.
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect(() => {
      console.log(this.currentStatus()); 
    });
 
  }

  ngOnInit(){
    console.log("ON INIT");
    const interval = setInterval(() => { //Si en un futuro queremos que esta sección desaparezca, no queremos que esta función se siga ejecutando porque tendríamos una fuga de memória.
      const rnd = Math.random(); // 0 - 0.999999999999

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => { //De esta forma podemos usar tantos onDestroy listeners como queramos
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {   //También lo he eliminado del 'implements' en el header de la clase para probar la alternativa.
  //   clearTimeout(this.interval);
  // }
}
