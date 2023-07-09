import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @ViewChild('videoElement') videoElementRef: any;

  ngAfterViewInit(): void {
    const videoElement: HTMLVideoElement = this.videoElementRef.nativeElement;
    videoElement.play();
  }
}
