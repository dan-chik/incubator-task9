import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
