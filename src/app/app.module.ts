import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { YearComponent } from './year/year.component';
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
import { CarouselComponent } from './carousel/carousel.component';




@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    HomeComponent,
    YearComponent,
    OldWorldComponent,
    TraditionalComponent,
    CraftsmanComponent,
    IronComponent,
    ContemporaryComponent,
    Gallery2019Component,
    Gallery2018Component,
    Gallery2017Component,
    Gallery2016Component,
    Gallery2015Component,
    Gallery2014Component,
    Gallery2013Component,
    Gallery2012Component,
    Gallery2011Component,
    Gallery2010Component,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
