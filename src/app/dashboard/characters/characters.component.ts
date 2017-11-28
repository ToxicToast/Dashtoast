import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  items = ['ZûgZûg', 'BloodyToast', 'Toxictoast'];
  constructor(private theme: NbThemeService) { }

  ngOnInit() {}

  getCharacters() {}

}
