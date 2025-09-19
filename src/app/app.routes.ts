import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'questionario',
    loadComponent: () => import('./questionario/questionario.page').then( m => m.QuestionarioPage)
  },
{
    path: 'opcaoa',
    loadComponent: () => import('./opcaoa/opcaoa.page').then( m => m.OpcaoaPage)
},
  {
    path: 'treinos',
    loadComponent: () => import('./treinos/treinos.page').then( m => m.TreinosPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then( m => m.InfoPage)
  },
  {
    path: 'config',
    loadComponent: () => import('./config/config.page').then( m => m.ConfigPage)
  },
  {
    path: 'esenha',
    loadComponent: () => import('./esenha/esenha.page').then( m => m.ESenhaPage)
  },





];
