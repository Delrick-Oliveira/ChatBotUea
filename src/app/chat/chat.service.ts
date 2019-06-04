import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    let requestObj = {"user_input": message}
    console.log(requestObj);
    return this.http.post<{response: string, status_code: number}>("http://172.30.15.53:8080/chat", requestObj).pipe(take(1));
  }
}
