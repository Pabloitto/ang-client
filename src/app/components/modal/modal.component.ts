import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ct-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalVisible: boolean = false
  @Input() title: string = ''
  constructor() { }

  ngOnInit() {
  }

  show () {
    this.modalVisible = true
  }

  hide () {
    this.modalVisible = false
  }

}
