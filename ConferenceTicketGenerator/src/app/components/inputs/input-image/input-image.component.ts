import {
  Component,
  computed,
  HostListener,
  inject,
  Injector,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import { InputAbstractComponent } from '../input-abstract/input-abstract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorPipe } from '../input-error.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-input-image',
  imports: [InputErrorPipe, ReactiveFormsModule],
  templateUrl: './input-image.component.html',
  styleUrl: './input-image.component.scss',
})
export class InputImageComponent extends InputAbstractComponent {
  file!: Signal<File | undefined>;

  imgUrl = computed(() => {
    let imageSrc: string | null = null;

    const file = this.file();

    if (file) {
      imageSrc = URL.createObjectURL(file);
    }

    return imageSrc;
  });

  private injector = inject(Injector);

  override ngOnInit(): void {
    super.ngOnInit();

    runInInjectionContext(this.injector, () => {
      this.file = toSignal(this.innerControl.valueChanges);
    });
  }

  @HostListener('drop', ['$event'])
  private onDrop(evt: DragEvent): void {
    const fileList: FileList | null = evt.dataTransfer?.files || null;

    if (fileList) {
      const file: File = fileList[0];
      console.log(file.name.slice(-3))
      if(file.name.slice(-3) === 'png' || file.name.slice(-3) === 'jpg') this.writeValue(file);
    }
  }

  addFile(evt: Event): void {
    const element = evt.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList) {
      const file: File = fileList[0];
      if(file.name.slice(-3) === 'png' || file.name.slice(-3) === 'jpg') this.writeValue(file);
    }
  }

  removeAvatar(): void {
    this.writeValue(null);
  }
}
