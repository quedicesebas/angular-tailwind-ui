import { Component, inject } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';
import { BottomSheetModalContentComponent } from '../bottom-sheet-modal-content/bottom-sheet-modal-content.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  openBottomSheetModal() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'My modal',
        description: 'A simple bottom sheet modal :)',
      },
    });
  }
}