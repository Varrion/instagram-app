import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../services/image.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteImageModalComponent} from './delete-image-modal/delete-image-modal.component';
import {EditImageModalComponent} from './edit-image-modal/edit-image-modal.component';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  imageId: any;
  imageDetails: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
  }

  openDeleteModal() {
    const modalRef = this.modalService.open(DeleteImageModalComponent);
    modalRef.componentInstance.id = this.imageId;
  }

  openEditModal() {
    const modalRef = this.modalService.open(EditImageModalComponent);
    modalRef.componentInstance.image = this.imageDetails;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.imageId = params['id']);
    this.imageService.getImageDetails(this.imageId).subscribe(response => {
      this.imageDetails = response;
    });
  }

}
