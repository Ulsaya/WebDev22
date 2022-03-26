/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {AlbumsService} from '../albums.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  // @ts-ignore
  albums: Album[];
  loaded: boolean | undefined;
  newAlbum: string;
  constructor(private albumsService: AlbumsService,
              private location: Location) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  // tslint:disable-next-line:typedef
  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  addAlbum(){
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  deleteAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
  // tslint:disable-next-line:typedef
  goBack(){
    this.location.back();
  }

}
