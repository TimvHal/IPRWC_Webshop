import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  
  private static counter:number;

  constructor() { 
  }

  ngOnInit() {
    SlideShowComponent.counter = 1;
    var video = document.getElementsByTagName('video')[0];
    video.onended = function() {
      SlideShowComponent.counter++;
      switch(SlideShowComponent.counter) {
        case 1:
          video.src ='../../../assets/mazda_rx7.mp4';
          break;
  
        case 2:
          video.src = '../../../assets/subaru.mp4';
          video.preload = '../../../assets/nissan.mp4';
          break;
        
        case 3:
          video.src = '../../../assets/nissan.mp4';
          break;
  
        case 4:
          video.src = '../../../assets/mazda_rx7_1.mp4';
          break;
  
        case 5:
          video.src = '../../../assets/nissan_2.mp4';
          break;
  
        case 6:
          video.src = '../../../assets/lancer_evo_7.mp4';
          video.preload = '';
          break;

        case 7:
          video.src = '../../../assets/webshop_intro_ext.mp4';
          SlideShowComponent.counter = 0;
          break;
      }

    }

  }

}
