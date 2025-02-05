import { Logger } from "../logger";

export interface ICookieManager {
  saveObject<T>(key: string, object: T): void;
  getObject<T>(key: string): T | null;
  removeObject(key: string): void;
}

export class CookieManager implements ICookieManager {
  private static _instance: ICookieManager;
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Retrieve an object by giving a key
   * @param key
   */
  getObject<T>(name: string): T | null {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value as T;
      }
    }
    return null;
  }

  /**
   * Save an object with a key
   * @param key
   * @param object
   */
  saveObject<T>(key: string, object: T): void {
    try {
      document.cookie = `${key}=${object}`;
    } catch (e) {
      Logger.getInstance().error(String(e));
    }
  }

  /**
   * Remove an object by giving a key
   * @param key
   */
  removeObject(key: string) {
    try {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } catch (e) {
      Logger.getInstance().error(String(e));
    }
  }
}
