import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes;
  /*   @Output() forwardSelectedPersonne = new EventEmitter(); */
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      data => this.personnes = data
    );
  }
  /*   forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(selectedPersonne);
  } */
}
