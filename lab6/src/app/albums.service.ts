import { Injectable } from '@angular/core';
import {ALBUM} from './fake-db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album, Photo} from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  /*// tslint:disable-next-line:typedef
  getAlbums(){
    return of(ALBUM);
  }

  // tslint:disable-next-line:typedef
  getAlbum(userId: number){
    const album = ALBUM.find((x) => x.userId === userId);
    return of(album);
  }*/

  // tslint:disable-next-line:typedef
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  // tslint:disable-next-line:typedef
  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getPostPhotos(id: number): Observable<Photo[]> {
    // @ts-ignore
    return this.client.get(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
