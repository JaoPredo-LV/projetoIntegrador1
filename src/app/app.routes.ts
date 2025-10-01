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
    loadComponent: () => import('./hitdezbike/hitdezbike.page').then( m => m.HitdezbikePage)
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
    path: 'hitrun',
    loadComponent: () => import('./hitrun/hitrun.page').then( m => m.HitrunPage)
  },
  {
    path: 'hitbike',
    loadComponent: () => import('./hitbike/hitbike.page').then( m => m.HitBikePage)
  },
  {
    path: 'tempobike',
    loadComponent: () => import('./tempobike/tempobike.page').then( m => m.TempobikePage)
  },
  {
    path: 'hitdezbike',
    loadComponent: () => import('./hitdezbike/hitdezbike.page').then( m => m.HitdezbikePage)
  },
  {
  path: 'hitquinzebike',
  loadComponent: () => import('./hitquinzebike/hitquinzebike.page').then( m => m.HitquinzebikePage)
},
{
  path: 'hitvintebike',
  loadComponent: () => import('./hitvintebike/hitvintebike.page').then( m => m.HitvintebikePage)
},
{
  path: 'hitvintecinco',
  loadComponent: () => import('./hitvintecinco/hitvintecinco.page').then( m => m.HitvintecincoPage)
},
  {
    path: 'hitesteira',
    loadComponent: () => import('./hitesteira/hitesteira.page').then( m => m.HitesteiraPage)
  },
  {
    path: 'tempoesteira',
    loadComponent: () => import('./tempoesteira/tempoesteira.page').then( m => m.TempoesteiraPage)
  },
  {
    path: 'hitdezeliptico',
    loadComponent: () => import('./hitdezeliptico/hitdezeliptico.page').then( m => m.HitdezelipticoPage)
  },
  {
    path: 'hitquinzeeliptico',
    loadComponent: () => import('./hitquinzeeliptico/hitquinzeeliptico.page').then( m => m.HitquinzeelipticoPage)
  },
  {
    path: 'hitvinteeliptico',
    loadComponent: () => import('./hitvinteeliptico/hitvinteeliptico.page').then( m => m.HitvinteelipticoPage)
  },
  {
    path: 'hitvinteecincoeliptico',
    loadComponent: () => import('./hitvinteecincoeliptico/hitvinteecincoeliptico.page').then( m => m.HitvinteecincoelipticoPage)
  },
  {
    path: 'hitdezrun',
    loadComponent: () => import('./hitdezrun/hitdezrun.page').then( m => m.HitdezrunPage)
  },
  {
    path: 'hitquinzerun',
    loadComponent: () => import('./hitquinzerun/hitquinzerun.page').then( m => m.HitquinzerunPage)
  },
  {
    path: 'hitvinterun',
    loadComponent: () => import('./hitvinterun/hitvinterun.page').then( m => m.HitvinterunPage)
  },
  {
    path: 'hitvinteecincorun',
    loadComponent: () => import('./hitvinteecincorun/hitvinteecincorun.page').then( m => m.HitvinteecincorunPage)
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
