import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  endPoint = 'http://web.e-control.mx/assets/php/contact-t.php';

  constructor(
    private http: HttpClient
  ) { }

  sendMail(info): Promise<any> {
    console.log(info);
    
    let mail = {
      name: info.name,
      email: info.email,
      comments: info.message,
      phone: info.phone
    };
    return this.http.post(this.endPoint, mail, {responseType: 'text'})
            .toPromise()
            .catch(err => console.log(err)
            );
  }
}
