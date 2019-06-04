import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  conversation = [];
  phone_model = 'iPhone';
  input = '';

  constructor(
    private platform: Platform,
    public alertController: AlertController,
    private menuCtrl: MenuController,
    private chatServ: ChatService
  ) {}

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
    setTimeout(() => {
      //this.presentAlert();
    }, 100);
  }

  send() {
    if (this.input != '') {
      this.conversation.push({
        text: this.input,
        sender: 1,
        image: 'assets/images/sg1.jpg'
      });
      this.chatServ.sendMessage(this.input).subscribe(resData=> {
        console.log(resData);
        this.conversation.push({
          text: resData.response,
          sender: 0,
          image: 'assets/images/sg2.jpg'
        })
      });
      this.input = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 10);
    }
  }

  scrollToBottom() {
    let content = document.getElementById('chat-container');
    let parent = document.getElementById('chat-parent');
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    };

    parent.scrollTo(scrollOptions);
  }
}
