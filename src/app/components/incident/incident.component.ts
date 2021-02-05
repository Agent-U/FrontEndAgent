import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})

export class IncidentComponent implements OnInit {
  incidents : any;
  incident : any;
  constructor(private service : IncidentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getIncidents();
  }

  public getIncidents(){
    let resp = this.service.getAllIncident();
    resp.subscribe((data)=>this.incidents=data);

  }

  public getDate(date :Date){
    return date.getTimezoneOffset()
  }

  openXl(content : any, incident : any) {
    this.modalService.open(content, { size: 'xl',  centered: true });
    this.incident = incident;
  }
}
