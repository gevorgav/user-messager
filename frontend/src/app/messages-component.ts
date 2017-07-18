import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'messages',
    templateUrl: 'messages-component.html'
})
export class MessagesComponent {
  public messages = [{'user': 'Benik','text': 'some text'}, {'user': 'Seroj','text': 'some text 2'}];
}
