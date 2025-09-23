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
    return this.rs.uploaded(fd);
  }
}