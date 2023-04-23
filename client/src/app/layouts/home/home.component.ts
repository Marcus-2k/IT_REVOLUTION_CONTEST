import { Component, OnInit } from '@angular/core';

import { RenameTitleService } from 'src/app/shared/service/rename-title.service';

// import Swiper, { Autoplay } from 'swiper';
// import { Navigation, Pagination, SwiperOptions } from 'swiper';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    console.log('Start ngOnInit Home');

    // Swiper.use([Navigation, Pagination, Autoplay]);
    // if (document.documentElement.clientWidth < 1024) {
    //   this.config.navigation = false;
    // }

    this.renameTitle.renameTitleSite('DOM.RIA');
  }

  // Aside START ===========================================================================

  // Aside END =============================================================================

  // Main START ============================================================================
  // config: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   autoplay: {
  //     delay: 3000,
  //     waitForTransition: true,
  //   },
  //   speed: 1800,
  // }; // Slider swiper config
  // Main END ==============================================================================
}
