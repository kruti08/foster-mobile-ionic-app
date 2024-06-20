import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tokens",
  templateUrl: "./tokens.page.html",
  styleUrls: ["./tokens.page.scss"],
})
export class TokensPage implements OnInit {
  clients = [
    {
      img: "assets/imgs/users/keryar.jpg",
      name: "Client Name",
      title: "Token Title",
      designer: "Designer Name",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
