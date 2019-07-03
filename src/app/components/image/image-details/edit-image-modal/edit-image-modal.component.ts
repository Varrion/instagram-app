import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageService} from '../../../../services/image.service';
import {Image} from '../../../../shared/models/Image';

@Component({
  selector: 'app-edit-image-modal',
  templateUrl: './edit-image-modal.component.html',
  styleUrls: ['./edit-image-modal.component.css']
})
export class EditImageModalComponent implements OnInit {


  @Input() image;
  id:number = 0;
  title: string = '';
  albumId: number = null;
  thumbnailUrl: string = '';
  url: string = '';

  constructor(private modal: NgbActiveModal, private imageService: ImageService ) { }

  ngOnInit() {

    console.log(this.image);
    this.id = this.image.id;
    this.title= this.image.title;
    this.albumId = this.image.albumId;
    this.thumbnailUrl= this.image.thumbnailUrl;
    this.url = this.image.url;
  }
  closeModal(){
    this.modal.close();
  }

  editImageDetails(){
    this.image = new Image();
    this.image.id = this.id;
    this.image.title = this.title;
    this.image.url = this.url;
    this.image.thumbnailUrl = this.thumbnailUrl;
    this.image.albumId= this.albumId;

    console.log("Edited Image ",this.image);
    this.imageService.editImage(this.image).subscribe((res)=> {
      console.log(res);
      this.closeModal()
    })


  }

}
