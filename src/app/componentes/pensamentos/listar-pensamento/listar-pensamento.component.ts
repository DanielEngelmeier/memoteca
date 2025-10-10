import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor sem sit amet dui blandit, ut porta justo egestas. Pellentesque vitae varius erat. Suspendisse potenti. Aliquam erat volutpat. Curabitur mauris sem, blandit in rhoncus eget, rhoncus et quam. Mauris nunc orci, aliquet in velit.',
      autoria: '',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
