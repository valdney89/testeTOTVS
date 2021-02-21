import {
  Component,
  OnInit,
  Injectable,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from './model/modal';

@Component({
  selector: 'todo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
@Injectable()
export class ModalComponent implements OnInit {
  @Input() public modalConfig: ModalConfig;

  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>;
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, {
        centered: true,
      });
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }
}
