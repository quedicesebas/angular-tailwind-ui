import { Component, inject, input } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-ngx-bottom-sheet-modal-content',
  imports: [],
  template: `
    <div
      class="pt-4 md:w-96 overflow-auto max-h-screen md:overflow-hidden bg-white dark:bg-slate-900 dark:text-white"
    >
      <div class="px-4">
        <h1 class="font-bold text-xl">{{ title() }}</h1>
        <p>{{ description() }}</p>
      </div>
      <p class="px-4 py-2 mt-4 bg-slate-200 dark:bg-slate-700">
        @if (showOKButton()) { ⓘ Tap OK button to close. } @else if
        (showCloseButton()) { ⓘ Tap outside, press Esc or click the X to close.
        } @else { ⓘ Tap outside or press Esc to close. }
      </p>
      <div class="px-4 pb-4 overflow-auto md:max-h-96">
        <p
          class="pt-4 font-semibold  cursor-pointer"
          (click)="expandedContent = !expandedContent"
        >
          {{
            expandedContent
              ? 'Show less content [-]'
              : 'Show more content ang go fullscreen [+]'
          }}
        </p>
        @if(expandedContent) {
        <p class="py-24">Some text</p>
        <p class="py-24">Some text</p>
        <p class="py-24">Some text</p>
        <p class="py-24">Some text</p>
        }
      </div>
      @if (showOKButton() || openOtherModal()) {
      <div
        class="p-4 flex gap-2 justify-end sticky bottom-0 bg-white dark:bg-slate-900 border-t-2 w-full md:rounded-b-xl"
      >
        @if (openOtherModal()) {
        <button
          type="button"
          (click)="openOther()"
          class="bg-cyan-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Open another modal
        </button>
        } @if (showOKButton()) {
        <button
          type="button"
          (click)="close()"
          class="bg-cyan-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        >
          OK
        </button>
        }
      </div>
      }
    </div>
  `,
  styles: '',
})
export class BottomSheetModalContentComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  // Inputs
  readonly title = input<string>();
  readonly description = input<string>();
  readonly showOKButton = input<boolean>();
  readonly showCloseButton = input(true);
  readonly openOtherModal = input<boolean>();

  // State
  expandedContent: boolean = false;

  close() {
    this.ngxBottomSheetModalService.closeBottomSheet();
  }

  openOther() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'Other modal',
        description: 'A simple bottom sheet modal over other :)',
      },
      closeButtonClass: 'text-cyan-400 dark:text-cyan-200',
    });
  }
}
