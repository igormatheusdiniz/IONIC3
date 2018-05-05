import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objetoFeed = {
    titulo: "Igor Matheus Diniz",
    feedDate: "November 5, 1955",
    description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean ?! Whoa. This is heavy",
    qntddLikes: 12,
    qntddComments: 4,
    dataComment: "11h ago"

  }
  public user_name: string = "Igor Diniz";
  public filmes = new Array<any>();

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private movieProvider: MoovieProvider ) {
  }

  public soma(): void {
    alert(8 + 2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }
    )
  }

}
