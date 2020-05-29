import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollpage: boolean = false;
  elementPosition: any;
  menu: any;

  @ViewChild('stickyMenu') menuElement: ElementRef;
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll > 0){
      this.scrollpage = true;
    } else {
      this.scrollpage = false;
    }
  }

  constructor(
    private _headerService: HeaderService
  ) {
    this._headerService.getMenu().valueChanges().subscribe(resp => {
      this.menu = resp;
      
    })
  }

  ngOnInit(): void {
  }

  menuNavigate(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"})
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

}
