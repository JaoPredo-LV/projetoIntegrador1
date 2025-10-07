import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(
    public rs:RequisicaoService
  ) { }

  upload(selectedFile:File){
    const fd = new FormData();
    fd.append('imagem',selectedFile);
    fd.append('controller','upload');
    fd.append('userid', String(sessionStorage.getItem('userid')));
    return this.rs.upload(fd, 'upload.php')
  }
}