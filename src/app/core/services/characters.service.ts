import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharactersService {

  private apiKey : string;
  private region : string = 'eu';
  private classes = [{
      id: 1,
      name: 'Warrior'
    }, {
      id: 2,
      name: 'Paladin'
    }, {
      id: 3,
      name: 'Hunter'
    }, {
      id: 4,
      name: 'Rogue'
    }, {
      id: 5,
      name: 'Priest'
    }, {
      id: 6,
      name: 'Death Knight'
    }, {
      id: 7,
      name: 'Shaman'
    }, {
      id: 8,
      name: 'Mage'
    }, {
      id: 9,
      name: 'Warlock'
    }, {
      id: 10,
      name: 'Monk'
    }, {
      id: 11,
      name: 'Druid'
    }, {
      id: 12,
      name: 'Demon Hunter'
    }];

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKeys.Blizzard.apiKey;
  }

  getCharacter(realm : string, name : string) {
    return this.fetchCharacterData(realm, name);
  }

  getClasses(classId) {
    return this.classes.filter(heroClass => {
      return heroClass.id === classId;
    });
  }

  private fetchCharacterData(realm : string, name : string) {
    const url = `https://${this.region}.api.battle.net/wow/character/${realm}/${name}?locale=en_GB&apikey=${this.apiKey}&fields=stats,guild`;
    return this.http.get(url).map(this.parseData).catch(this.handleError);
  }

  private parseData(res : Response) {
    return res || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }
}
