import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funcionalidad } from "../../models/funcionalidad";
import { FuncionalidadService } from "../../services/funcionalidad-services.service";

@Component({
  selector: 'app-edit-funcionalidad',
  templateUrl: './edit-funcionalidad.component.html',
  styleUrls: ['./edit-funcionalidad.component.scss']
})
export class EditFuncionalidadComponent implements OnInit {

  message = '';

  // funcionalidades?: Funcionalidad[];

  @Input() selectedFuncionalidad: Funcionalidad = {
    cod_funcionalidad: 0,
    detalle_funcionalidad: ''
  };


  constructor(private funcionalidadService: FuncionalidadService,
    private route: ActivatedRoute,
    private router: Router) {    }

  ngOnInit(): void {
  }

  updateFuncionalidad(): void {
    
    this.message = '';

    this.funcionalidadService.update(this.selectedFuncionalidad.cod_funcionalidad, this.selectedFuncionalidad)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Funcionalidad actualizada correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  refreshPage(): void{

    window.location.reload();
    
  }

}
