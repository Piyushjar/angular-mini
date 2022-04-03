import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-ckeditor-page',
  templateUrl: './ckeditor-page.component.html',
  styleUrls: ['./ckeditor-page.component.css']
})
export class CkeditorPageComponent implements OnInit {

  passingArr:string[]=[];
  public Editor = ClassicEditor;
  public retrieveddata="";
  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
    this.retrieveddata=data;
  }
  save(){
    this.passingArr.push(this.retrieveddata);
    // console.log(this.passingArr);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
