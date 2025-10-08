import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { RequisicaoService } from '../service/requisicao';
import { UploadService } from '../service/upload';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class ConfigPage implements OnInit {
  public nome:string="";
  public genero:string="";

  email = {
    email: sessionStorage.getItem('email')
  }

  date = {
    dataN: sessionStorage.getItem('dataN')
  }

  @ViewChild('inputFile') input!:ElementRef;
  @Input() srcImage:string = '';
  @Input() params!:HttpParams;
  @Input('id') idImage:string = '';
  @Input() styleClass:string = '';
  @Input('height') heightImage:string = '30%';
  @Output() uploaded = new EventEmitter();
  @Output() no_image = new EventEmitter<any>();
  @Output() set_image = new EventEmitter<any>();
  @Output() show_dialog  = new EventEmitter();
  public sem_imagem_src = '/assets/fotoTeste.png';

  constructor(public rs: RequisicaoService, public us:UploadService) {
    this.nome = sessionStorage.getItem('username') || '';
    this.genero = sessionStorage.getItem('genero') || '';
    this.srcImage = sessionStorage.getItem('imagem') || '';
  }

   salvar() {
    const fd =new FormData();
    fd.append('controller','atualizar-usuario');
    fd.append('id', String(sessionStorage.getItem('id')));
    fd.append('nome', this.nome);
    fd.append('genero', this.genero);
    fd.append('imagem', this.srcImage);
  

    sessionStorage.setItem('username', this.nome);
    sessionStorage.setItem('genero', this.genero);
    sessionStorage.setItem('imagem', this.srcImage);
    this.rs.post(fd, 'cadastro-usuario.php').subscribe();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (sessionStorage.getItem('user_src_img')){
      this.srcImage = String(sessionStorage.getItem('user_src_img'));
    }else{
      this.noImagem();
    }    
  }

  onFileSelected(event:any)
  {

    // Arquivo Uploaded
    let selectedFile = <File>event.target.files[0];

    // Upload de Arquivo
    this.us.upload(selectedFile).subscribe(
      (response:any) => {
        if (response.status=='success'){
          this.srcImage = 'http://localhost/autenticacao/' + response.src;

          sessionStorage.setItem('user_src_img', this.srcImage);
        }
        this.uploaded.emit(response);
      }
    );
  }

  noImagem(){
    this.no_image.emit();
    this.srcImage = this.sem_imagem_src;
  }

  setImagem(src:string){    
    this.srcImage = src == null ? this.sem_imagem_src : src;
    this.set_image.emit();
  }

  showDialog()
  {
    this.show_dialog.emit();
    this.input.nativeElement.click();
  }
}

