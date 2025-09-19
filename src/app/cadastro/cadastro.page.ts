import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule], // 🔥 necessário no standalone
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

  constructor() {}

  // Abrir câmera ou galeria
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

  // Salvar cadastro no Firestore
  async salvar() {
    try {
      let photoUrl = null;

      if (this.selectedImage) {
        const storage = getStorage();
        const filePath = `usuarios/${Date.now()}.jpg`;
        const storageRef = ref(storage, filePath);

        await uploadString(storageRef, this.selectedImage, 'data_url');

        photoUrl = await getDownloadURL(storageRef);
      }

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

      console.log('Usuário cadastrado com sucesso!');
      alert('Cadastro realizado com sucesso!');
    } catch (err) {
      console.error('Erro ao cadastrar usuário:', err);
      alert('Erro ao cadastrar usuário!');
    }
  }
}
