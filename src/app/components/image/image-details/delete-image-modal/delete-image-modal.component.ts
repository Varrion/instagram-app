import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageService} from '../../../../services/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-image-modal',
  templateUrl: './delete-image-modal.component.html',
  styleUrls: ['./delete-image-modal.component.css']
})
export class DeleteImageModalComponent implements OnInit {

  @Input() id: any;


  constructor(private modal: NgbActiveModal, private imageService: ImageService, private router: Router) {
  }


  closeModal() {
    this.modal.close();
  }

  deleteAnImage() {
    this.imageService.deleteImage(this.id).subscribe(() => {
      this.router.navigateByUrl('images').then(() => this.closeModal());

    });
  }

  ngOnInit() {
  }

}
