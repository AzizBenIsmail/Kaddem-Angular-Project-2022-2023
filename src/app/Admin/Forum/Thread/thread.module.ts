import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThreadRoutingModule } from "./thread-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { ListThreadComponent } from "./list-thread/list-thread.component";
import { CreateThreadComponent } from "./create-thread/create-thread.component";

const routes: Routes = [
  { path: "", component: ListThreadComponent },
  { path: "createThread", component: CreateThreadComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule, ThreadRoutingModule],
  exports: [RouterModule],
})
export class ThreadModule {}
