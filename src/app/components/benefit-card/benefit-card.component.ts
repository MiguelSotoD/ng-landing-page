import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefit-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss'
})
export class BenefitCardComponent {
    @Input("card-text") cardText: string = "";
    @Input("card-img") cardImg: string = "";
    @Input("card-title") cardTitle: string = "";
}
