import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Not Found 404
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

// Components
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { RealEstateNewComponent } from 'src/app/layouts/real-estate-new/real-estate-new.component';
import { HistoryOperationsComponent } from 'src/app/layouts/history-operations/history-operations.component';
import { ApartmentsCardsComponent } from 'src/app/layouts/apartments-cards/apartments-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'real-estate-new',
    component: RealEstateNewComponent,
  },
  {
    path: 'history-operations',
    component: HistoryOperationsComponent,
  },
  {
    path: 'apartments-cards',
    component: ApartmentsCardsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
