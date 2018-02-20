import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ct-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalVisible: boolean = false
  @Input() title: string = ''
  @Input() actions = []
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  show () {
    this.modalVisible = true
  }

  hide () {
    this.modalVisible = false
    this.onClose.emit()
  }

  handleClick(action) {
    action.onClick(this)
  }

}
