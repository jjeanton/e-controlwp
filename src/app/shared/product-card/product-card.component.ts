import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: any;
  @Input('index') index: any;

  playingVideo: boolean = false;

  @ViewChild('videoPlayer') videoPlayer: ElementRef;


  constructor() { }

  ngOnInit(): void {
    console.log(this.index);
    
    
  }

  playVideo() {
    this.playingVideo = true;
    this.videoPlayer.nativeElement.play();
  }

  videoEnd() {
    this.playingVideo = false;
  }

}
