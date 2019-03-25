import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * Get item from storage
   * @param {string} key
   * @returns {string}
   */
  public getItem<T>(key: string): T {
    const data = localStorage.getItem(key);
    if (data && data !== 'undefined') {
      return JSON.parse(data);
    }
    return null;
  }

  /**
   * Set item in storage
   * @param {string} key
   * @param {object | string} data
   */
  public setItem(key: string, data: object | string) {
    this.removeItem(key);
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Remove item from storage
   * @param {string} key
   */
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * Clear storage
   */
  public clear() {
    localStorage.clear();
  }
}
