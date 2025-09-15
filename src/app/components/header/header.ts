import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Output() onNewBackend = new EventEmitter<void>();
  @Output() onApiTester = new EventEmitter<void>();

  openSettings() {
    console.log('Abrir configurações');
  }

  openNotifications() {
    console.log('Abrir notificações');
  }

  openProfile() {
    console.log('Abrir perfil');
  }

  // Novos métodos para emitir eventos
 
  openApiTester() {
    this.onApiTester.emit();
  }
}