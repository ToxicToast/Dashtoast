import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { CharactersService } from '../../core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  champions = [];
  error;

  constructor(
    private theme: NbThemeService,
    private characters : CharactersService
  ) { 
    //this.setCharacters("The Sha'tar", "Zûgzûg");
    this.setCharacters("Dun Morogh", "Pewpewpaul");
    //this.setCharacters('Dun Morogh', 'pewpewele');
    //this.setCharacters('Dun Morogh', 'gachigasm');
  }

  ngOnInit() {}

  getClasses(classId) {
    const heroClass = this.characters.getClasses(classId);
    const { id, name } = heroClass[0];
    return name;
  }

  setCharacters(realm : string, name : string) : void {
    this.characters.getCharacter(realm, name).subscribe(
      character => { 
        character.className = this.getClasses(character.class);
        console.log(character);
        this.champions.push(character); 
      },
      error => { this.error = error; }
    );
  }

  getSpecTitle(specId : number) : string {
    return 'SPEC';
  }

}
