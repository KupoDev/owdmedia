import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CollectionsComponent } from './collections/collections.component';
import { YearComponent } from './year/year.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OldWorldComponent } from './collections/old-world/old-world.component';
import { TraditionalComponent } from './collections/traditional/traditional.component';
import { CraftsmanComponent } from './collections/craftsman/craftsman.component';
import { IronComponent } from './collections/iron/iron.component';
import { ContemporaryComponent } from './collections/contemporary/contemporary.component';
import { Gallery2019Component } from './year/gallery2019/gallery2019.component';
import { Gallery2018Component } from './year/gallery2018/gallery2018.component';
import { Gallery2017Component } from './year/gallery2017/gallery2017.component';
import { Gallery2016Component } from './year/gallery2016/gallery2016.component';
import { Gallery2015Component } from './year/gallery2015/gallery2015.component';
import { Gallery2014Component } from './year/gallery2014/gallery2014.component';
import { Gallery2013Component } from './year/gallery2013/gallery2013.component';
import { Gallery2012Component } from './year/gallery2012/gallery2012.component';
import { Gallery2011Component } from './year/gallery2011/gallery2011.component';
import { Gallery2010Component } from './year/gallery2010/gallery2010.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'year', component: YearComponent },
  { path: 'carousel/:id', component: CarouselComponent },
  
  { path: 'collectionOldWorld', component: OldWorldComponent },
  { path: 'collectionTraditional', component: TraditionalComponent },
  { path: 'collectionCraftsman', component: CraftsmanComponent },
  { path: 'collectionIron', component: IronComponent },
  { path: 'collectionContemporary', component: ContemporaryComponent },
  { path: 'gallery2019', component: Gallery2019Component },
  { path: 'gallery2018', component: Gallery2018Component },
  { path: 'gallery2017', component: Gallery2017Component },
  { path: 'gallery2016', component: Gallery2016Component },
  { path: 'gallery2015', component: Gallery2015Component },
  { path: 'gallery2014', component: Gallery2014Component },
  { path: 'gallery2013', component: Gallery2013Component },
  { path: 'gallery2012', component: Gallery2012Component },
  { path: 'gallery2011', component: Gallery2011Component },
  { path: 'gallery2010', component: Gallery2010Component },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
