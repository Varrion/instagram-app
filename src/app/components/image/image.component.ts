import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: any = [];

  constructor(private service: ImageService) {
  }


  getAllImages() {
    this.service.getImages()
      .subscribe(response => {
        this.images = response.filter(image => {
          return image.id < 55;
        });
      });
  }

  ngOnInit() {
    this.getAllImages();
  }

}

