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
  path: 'dieta',
  loadComponent: () => import('./dieta/dieta.page').then(m => m.DietaPage),
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
  {
    path: 'hits',
    loadComponent: () => import('./hits/hits.page').then( m => m.HitsPage)
  },
  {
    path: 'gymdesafios',
    loadComponent: () => import('./gymdesafios/gymdesafios.page').then( m => m.GymdesafiosPage)
  },
  {
    path: 'hitdez',
    loadComponent: () => import('./hitdez/hitdez.page').then( m => m.HitdezPage)
  },
  {
    path: 'tempo',
    loadComponent: () => import('./tempo/tempo.page').then( m => m.TempoPage)
  },
  {
    path: 'nivel',
    loadComponent: () => import('./nivel/nivel.page').then( m => m.NivelPage)
  },
  {
    path: 'opcaob',
    loadComponent: () => import('./opcaob/opcaob.page').then( m => m.OpcaobPage)
  },
  {
    path: 'opcaoc',
    loadComponent: () => import('./opcaoc/opcaoc.page').then( m => m.OpcaocPage)
  },
  {
    path: 'niveleliptco',
    loadComponent: () => import('./niveleliptco/niveleliptco.page').then( m => m.NiveleliptcoPage)
  },
  {
      path: 'hiteliptico',
    loadComponent: () => import('./hiteliptico/hiteliptico.page').then( m => m.HitelipticoPage)
  },
  {
    path: 'nivel',
    loadComponent: () => import('./nivel/nivel.page').then( m => m.NivelPage)
  },
  {
    path: 'hit',
    loadComponent: () => import('./hitbike/hitbike.page').then( m => m.HitBikePage)
  },
  {
    path: 'hitrun',
    loadComponent: () => import('./hitrun/hitrun.page').then( m => m.HitrunPage)
  },
  {
    path: 'hitbike',
    loadComponent: () => import('./hitbike/hitbike.page').then( m => m.HitBikePage)
  },
  {
    path: 'tempotwo',
    loadComponent: () => import('./tempotwo/tempotwo.page').then( m => m.TempotwoPage)
  },
  {
    path: 'tempothree',
    loadComponent: () => import('./tempothree/tempothree.page').then( m => m.TempothreePage)
  },
];
