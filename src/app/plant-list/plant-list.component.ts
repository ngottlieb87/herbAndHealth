import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  providers: [PlantService]
})

export class PlantListComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;
  constructor(private router: Router, private plantService: PlantService) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
    debugger;
  }

<<<<<<< HEAD
  goToPlantDetailPage(clickedPlant: Plant){
    // this.router.navigate(['plants',clickedPlant.$key])
  }

=======
  goToPlantDetailPage(clickedPlant){
    this.router.navigate(['plants',clickedPlant.$key])
  };
>>>>>>> 91ff6bce6876b316c3ae70f2096d6cae8a03542a
}
