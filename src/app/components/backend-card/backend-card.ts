import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Backend } from '../../models/backend.model';

@Component({
  selector: 'app-backend-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-card.html',
  styleUrls: ['./backend-card.css']
})
export class BackendCardComponent {
  @Input() backend!: Backend;
  @Output() onViewDetails = new EventEmitter<Backend>();

  getStatusClass(): string {
    switch (this.backend.status) {
      case 'Healthy':
        return 'status-healthy';
      case 'Warning':
        return 'status-warning';
      case 'Error':
        return 'status-error';
      default:
        return 'status-unknown';
    }
  }

  viewDetails() {
    this.onViewDetails.emit(this.backend);
  }

  // Métodos removidos: getEnvironmentClass, getStatusIcon, getEnvironmentIcon
  // (não são mais necessários)
}