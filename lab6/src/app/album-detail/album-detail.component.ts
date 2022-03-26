import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded: boolean | undefined;
  photos: Photo[] | undefined;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  // tslint:disable-next-line:typedef
  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateAlbum(){
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  showPhotos(){
    this.albumsService.getPostPhotos(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }

  // tslint:disable-next-line:typedef
  goBack(){
    this.location.back();
  }

}
