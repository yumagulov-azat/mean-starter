import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@app/core/api/api-response.model';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.scss']
})
export class ThingsComponent implements OnInit {

  public things: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/things')
      .subscribe((res: ApiResponse) => this.things = res.data);
  }

}
