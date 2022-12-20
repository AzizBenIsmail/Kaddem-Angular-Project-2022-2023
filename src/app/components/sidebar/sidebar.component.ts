import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/user-profile", title: "User Profile", icon: "person", class: "" },
  { path: "/Equipes", title: "Gerer Equipes", icon: "groups", class: "" },

  { path: "/Universite", title: "Gerer Universite", icon: "school", class: "" },

  { path: "/Departement", title: "Gerer Departement", icon: "apartment", class: "" },

  { path: "/Projets", title: "Projets", icon: "table_view", class: "" },

  { path: "/Contrat", title: "Contrat", icon: "wysiwyg", class: "" },

  { path: "/Reclamation", title: "Reclamation", icon: "sms_failed", class: "" },

  { path: "/Projets", title: "Projets", icon: "table_view", class: "" },

  {
    path: "/table-list",
    title: "Table List",
    icon: "content_paste",
    class: "",
  },
  { path: "/Forum/all", title: "Forum", icon: "groups", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
