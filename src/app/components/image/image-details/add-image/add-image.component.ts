import {Component, OnInit} from '@angular/core';
import {Image} from '../../../../shared/models/Image';
import {ImageService} from '../../../../services/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  image: Image;

  id:number = 0;
  title: string = '';
  albumId: number = null;
  thumbnailUrl: string = '';
  url: string = '';

  constructor(private imageService: ImageService, private router:Router) {
  }

  formSubmit() {

    this.image = new Image();
    this.image.id = this.id;
    this.image.title = this.title;
    this.image.url = this.url;
    this.image.thumbnailUrl = this.thumbnailUrl;
    this.image.albumId= this.albumId;

    console.log(this.image);
    this.imageService.addImage(this.image).subscribe(()=> this.router.navigateByUrl('images') );
  }

  ngOnInit() {
  }

}
