import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  url = new Array<any>();
  msg = "";

  numImages: number = 0;
  numArray = new Array();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.numImages = params['images'];
      for(let i = 0; i < this.numImages; i++) {
        this.numArray[i] = i;
      }
    });
  }

  selectFile(event: any, index: number) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = "You must select an image"
      return;
    }

    let mimeType = event.target.files[0].type;

    if(mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url[index] = reader.result;
      console.log(this.url);
    }
  }

}
