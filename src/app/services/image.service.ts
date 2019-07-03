import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl: string = `http://jsonplaceholder.typicode.com/photos/`;

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageDetails(id): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  deleteImage(id): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }

  addImage(image): Observable<any> {
    return this.http.post(this.apiUrl, image);
  }

  editImage(image): Observable<any> {
    return this.http.put(this.apiUrl + image.id, image);
  }
}
