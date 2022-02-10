import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolServicesService } from 'src/app/services/rol-services.service';

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.scss']
})
export class EditRolComponent implements OnInit {

  message = '';

  @Input() selectedRol: Rol = {
    cod_rol: 0,
    detalle_rol: ''
  };

  constructor(
    private rolServices: RolServicesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  updateRol(): void {

    this.message = '';

    this.rolServices.update(this.selectedRol.cod_rol, this.selectedRol)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Rol actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  refreshPage(): void {

    window.location.reload();

  }

}
