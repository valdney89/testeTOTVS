export class ModalConfig {
  modalTitle: string;
  shouldClose?(): Promise<boolean> | boolean;
  shouldDismiss?(): Promise<boolean> | boolean;
  onClose?(): Promise<boolean> | boolean;
  onDismiss?(): Promise<boolean> | boolean;
}
