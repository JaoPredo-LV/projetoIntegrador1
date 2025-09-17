import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao';

export const authGuard: CanActivateFn = (route, state) => {
  const Autenticacao = inject(AutenticacaoService);
  const router = inject(Router);
  const token = sessionStorage.getItem('token');

  if(token=='' || token==null || token==undefined){
    router.navigateByUrl('/login');
    return false;
  }

  Autenticacao.validarToken(token).subscribe((res:any)=>{
    if(!res){
      router.navigateByUrl('/login');
    }
  });
  return true;
};
