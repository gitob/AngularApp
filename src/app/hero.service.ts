import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {

  }

  AddMessages(str: string) {
    this.messageService.add(str);
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HEROService: feteched heroes');
    return of(HEROES);
  }
}
