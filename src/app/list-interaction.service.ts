import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListInteracionService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44362/api/Cars';

  constructor(private http: HttpClient) {
    //; charset=utf-8
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  public get() {
    // Get all cars data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers, withCredentials: true});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}