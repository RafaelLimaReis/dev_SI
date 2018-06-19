import { AuthProvider } from './../../providers/auth/auth';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  view: string ='Filmes';

  constructor(
        public authProvider: AuthProvider,
        public navCtrl: NavController,
        public userProvider: UserProvider,
        public menuController: MenuController) {

  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authProvider.authenticated;
  }

  ionViewDidLoad(){
    // habilita o menu depois que usuário estiver logado
    this.menuController.enable(true, 'user-menu');

  }
  
  onLogout(): void {
    this.authProvider.logout();
  }
  
}
