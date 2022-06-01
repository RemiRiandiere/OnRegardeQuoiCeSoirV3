import { Component, Input, OnInit } from '@angular/core';
import { ActorInfo } from '../models/actor-info.model';

@Component({
  selector: 'app-actors-tile',
  templateUrl: './actors-tile.component.html',
  styleUrls: ['./actors-tile.component.css']
})
export class ActorsTileComponent implements OnInit {

  constructor() { }

  @Input() actor: ActorInfo

  ngOnInit() {
  }

}