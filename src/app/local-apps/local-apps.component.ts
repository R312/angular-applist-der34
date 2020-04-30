import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
 // ActivatedRouteSnapshot,
 // RouterStateSnapshot,
 // CanActivateChild,
 // NavigationExtras
}                           from '@angular/router';
import { delay } from 'rxjs/operators';
export interface appModel {
  id: number;
  name: string;
  img: string;
  url: string;
}

@Component({
  selector: 'app-local-apps',
  templateUrl: './local-apps.component.html',
  styleUrls: ['./local-apps.component.css']
})
export class LocalAppsComponent implements OnInit {
   public appModel:appModel[] = [
      {
        "id": 1,
        "name": "SyncThinc",
        "img": "https://github.com/syncthing/syncthing/raw/master/assets/logo-128.png",
        "url": "https://github.com/syncthing",
        },
        {
        "id": 2,
        "name": "KeeWeb",
        "img": "https://github.com/keeweb/keeweb/raw/master/graphics/128x128.png",
        "url": "",
        },
        {
        "id": 3,
        "name": "Deluge",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Deluge-Logo.svg/200px-Deluge-Logo.svg.png",
        "url": "",
        },
        {
        "id": 4,
        "name": "Converse",
        "img": "https://github.com/conversejs/converse.js/raw/master/logo/conversejs-filled-192.png",
        "url": "www.google.de",
        }
    ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  redirect(url:string) {
    console.log(url);
    window.location.href=url;
    this.router.navigateByUrl(url);
  };
}