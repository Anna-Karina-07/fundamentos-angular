import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MutiplicaPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
