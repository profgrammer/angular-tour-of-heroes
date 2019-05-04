import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public because it needs to be bound to the html.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
