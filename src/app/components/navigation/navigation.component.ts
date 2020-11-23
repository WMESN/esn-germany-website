import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hideMenu();
    }
  }

  ngOnInit() {}

  showMenu() {
    var burger = <HTMLUListElement>document.getElementById('burger');
    var menu = <HTMLUListElement>document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu() {
    const burger = document.getElementById('burger') as HTMLUListElement;
    const menu = document.getElementById('menu') as HTMLUListElement;
    burger.classList.remove('hidden');
    burger.classList.add('vis');
    menu.classList.remove('vis');
    menu.classList.add('hidden');
  }
}
