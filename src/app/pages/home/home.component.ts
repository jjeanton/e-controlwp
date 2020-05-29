import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { InfoModel } from 'src/app/models/info.model';
import { ActivatedRoute } from '@angular/router';
import { MailModel } from 'src/app/models/mail.model';
import { MailService } from 'src/app/services/mail.service';

import * as _ from 'lodash';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any;
  loading: boolean;
  info: InfoModel;
  mailMsg: MailModel = {
    name: '',
    email: '',
    message: '',
    phone: ''
  };

  forma: FormGroup;
  productSubscribe: any;
  infoSubscribe: any;

  constructor(
    private _homeService: HomeService,
    private _mailService: MailService,
    private snackBar: MatSnackBar
  ) {
    this.loading = true;

    this.getInfo();

    this.productSubscribe = this._homeService.getProducts().valueChanges().subscribe((resp: any) => {
      if(resp.length > 0) {
        
        this.productList = resp.slice().sort((a,b) => a.created_at - b.created_at);
        this.loading = false;
      }
      
    })
  }
  
  ngOnInit(): void {
    this.forma = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }

  videoPlay(id) {
    const videoElement: any = document.getElementById(`video${id}`);
    videoElement.play()
  }

  goTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }

  getInfo() {
    this._homeService.getInfo().valueChanges().subscribe((resp: InfoModel) => {
      
      this.info = resp;
    });
    
  }
  sendMail() {
    
    if(!this.forma.valid) {
      return
    };
    
    this._mailService.sendMail(this.forma.value).then(resp => {
      if(_.includes(resp, 'success')) {
        this.snackBar.open('Mensaje enviado con exito', 'E-Control', {
          duration: 2000,
        });
        this.forma.reset();
      } else {
        this.snackBar.open('Ocurrio un error, intente mas tarde', 'E-Control', {
          duration: 2000,
        });
        
      }
      
    })
    
  }
  onDestroy() {
    this.productSubscribe.unsubscribe();
    this.infoSubscribe.unsubscribe();
  }

}
