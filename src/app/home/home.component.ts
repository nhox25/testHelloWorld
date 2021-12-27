import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Võ Yên"
  public age = 6
  public count = 0
  public VN = ["Võ Yên", "Võ Văn Tưởng", "Võ Văn Phin"]
  constructor() { }

  ngOnInit(): void {
  }
  public TangTuoi(){
    this.age++
  }

}
