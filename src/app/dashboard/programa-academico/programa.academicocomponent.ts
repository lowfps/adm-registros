import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Programa } from 'src/app/models/programa';
import { ProgramaServiceService } from 'src/app/services/programa-service.service';

@Component({
  selector: 'app-programa-academico',
  templateUrl: './programa.academico.component.html',
  styleUrls: ['./programa.academico.scss']
})
export class ProgramaComponent implements OnInit {

  programas?: Programa[];

  constructor(private programadService: ProgramaServiceService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {
    $.getScript('./assets/js/e-commerce-dashboard.js');
    this.getAll();
  }

  getAll(): void {
    this.programadService.getAll()
      .subscribe({
        next: (data) => {
          this.programas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deletePrograma(programa): void {
    this.programadService.delete(programa.cod_programa)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/programa-academico']);

        },
        error: (e) => console.error(e)
      });
  }


}
