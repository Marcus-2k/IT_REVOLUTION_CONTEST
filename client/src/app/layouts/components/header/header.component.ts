import { Component, OnInit, DoCheck } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/shared/service/server/auth.service';
import { OpenDialogService } from 'src/app/shared/service/open-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private openDialog: OpenDialogService
  ) {}

  ngOnInit(): void {
    console.log('Start ngOnInit Header');

    this.route.queryParams.subscribe((data) => {
      if (data['search_text']) {
        this.searchText = data['search_text'];
      }
    });

    this.authenticatedUser = this.auth.isAuthenticated();

    const history = localStorage.getItem('history-search');
    if (history) {
      this.historySearchArray = history.split(',');

      this.historySearchArray = this.historySearchArray.filter((searchText) => {
        if (searchText === '') {
          return false;
        } else {
          return true;
        }
      });
    }

    this.widthBlockForm =
      document.getElementsByClassName('search__form')[0].clientWidth;
  }

  ngDoCheck(): void {
    this.authenticatedUser = this.auth.isAuthenticated();
  }

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  // Menu START ===========================================================
  // Menu END =============================================================

  // Search START =========================================================
  searchText: string | undefined;

  historySearchArray: string[] = [];

  widthBlockForm: number = 320;
  search(title?: string) {
    if (title) {
      this.searchText = title;
    }

    if (this.searchText) {
      const historyLocalStorage: string | null =
        localStorage.getItem('history-search');

      if (historyLocalStorage) {
        let historySearch: string[] = historyLocalStorage.split(',');

        let index: number = -1;

        for (let idx = 0; idx < historySearch.length; idx++) {
          if (historySearch[idx] === title) {
            index = idx;
            break;
          }
        }

        if (index === -1) {
          historySearch.unshift(this.searchText);
        } else if (index >= 0) {
          historySearch.splice(index, 1);
          historySearch.unshift(this.searchText);
        }

        localStorage.setItem('history-search', historySearch.join(','));
        this.historySearchArray = historySearch;
      } else {
        localStorage.setItem('history-search', this.searchText);
        this.historySearchArray.push(this.searchText);
      }

      this.router.navigate(['search'], {
        queryParams: {
          search_text: this.searchText,
        },
      });
    }
  }

  clearHistorySearch() {
    localStorage.removeItem('history-search');

    this.historySearchArray = [];
  }
  // Search END ===========================================================

  // User START ===========================================================
  lengthFavorite: number = 0;
  lengthCart: number = 0;

  authenticatedUser: boolean = false;

  openLoginWindow() {
    this.openDialog.openLoginWindow();
  }

  logout() {
    this.auth.logout().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }
  // User END =============================================================
  // Media Adaptability START =============================================
  burgerMenu: boolean = false;
  windowWidth: number = window.innerWidth;

  clickBurgerMenu() {
    if (this.windowWidth <= 767) {
      if (this.body.classList.contains('active__menu')) {
        this.burgerMenu = false;
        this.body.classList.remove('active__menu');
      } else {
        this.burgerMenu = true;
        this.body.classList.add('active__menu');
      }
    }
  }
  // Media Adaptability END ===============================================
}
