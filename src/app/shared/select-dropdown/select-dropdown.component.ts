import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css'],
})
export class SelectDropdownComponent {
  @Output() setValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() values: string[] = [];
  @Input() title: string = '';
  @Input() type: string = 'string';

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  isOpen: boolean = false;

  selectedValue: string | undefined;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if the clicked element is within the dropdown component
    // If not, close the dropdown
    const clickedElement = event.target as HTMLElement;
    if (
      !this.elementRef.nativeElement.contains(clickedElement) &&
      this.isOpen === true
    ) {
      this.isOpen = false;
    }
  }

  handleOpen() {
    this.isOpen = !this.isOpen;
  }

  updateValue(value: string) {
    this.selectedValue = value;
    this.setValue.emit(value);
    this.handleOpen();
  }
  clearValues() {
    this.selectedValue = undefined;
    this.setValue.emit('');
  }
}
