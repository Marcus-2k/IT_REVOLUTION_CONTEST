import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// Not Found 404
// import { NotFoundComponent } from "src/app/not-found/not-found.component";

const routes: Routes = [
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
