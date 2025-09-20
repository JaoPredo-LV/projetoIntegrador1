import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, personCircleOutline } from 'ionicons/icons';
import { RequisicaoService } from '../service/requisicao';
import { RouterModule } from '@angular/router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, IonicModule], // 🔥 necessário no standalone
})
export class CadastroPage {
  selectedImage: string | null = null;

  nome!: string;
  data!: string;
  peso!: number;
  altura!: number;
  genero!: string;
  email!: string;
  senha!: string;

  constructor(public rs: RequisicaoService) {
    addIcons({ home, personCircleOutline });
  }

  // 📷 Abrir câmera ou galeria
  async openCameraOrGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt, // abre popup: "Câmera" ou "Galeria"
      });

      this.selectedImage = image.dataUrl!;
    } catch (err) {
      console.error('Erro ao abrir câmera/galeria:', err);
    }
  }

  // 💾 Salvar cadastro (Firestore + API Requisição)
  async salvar() {
    try {
      let photoUrl: string | null = null;

      // Upload da foto no Firebase Storage
      if (this.selectedImage) {
        const storage = getStorage();
        const filePath = `usuarios/${Date.now()}.jpg`;
        const storageRef = ref(storage, filePath);

        await uploadString(storageRef, this.selectedImage, 'data_url');
        photoUrl = await getDownloadURL(storageRef);
      }

      // Salva no Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'usuarios'), {
        nome: this.nome,
        data: this.data,
        peso: this.peso,
        altura: this.altura,
        genero: this.genero,
        email: this.email,
        senha: this.senha,
        foto: photoUrl,
      });

      // Salva também na sua API (via RequisicaoService)
      const fd = new FormData();
      fd.append('controller', 'cadastro-usuario');
      fd.append('nome', this.nome);
      fd.append('data', this.data);
      fd.append('email', this.email);
      fd.append('senha', this.senha);
      fd.append('peso', String(this.peso));
      fd.append('altura', String(this.altura));
      fd.append('genero', this.genero);

      this.rs.post(fd).subscribe({
        next: () => console.log('Usuário salvo no backend!'),
        error: (err) => console.error('Erro API:', err),
      });

      alert('Cadastro realizado com sucesso!');
    } catch (err) {
      console.error('Erro ao cadastrar usuário:', err);
      alert('Erro ao cadastrar usuário!');
    }
  }
}

