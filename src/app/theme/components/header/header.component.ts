import { Component, OnInit, Input } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
  ) { }

  ngOnInit() {}

  toggleSidebar() {}
  goToHome() {}

}
