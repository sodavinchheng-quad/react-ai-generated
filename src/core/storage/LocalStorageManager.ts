import CryptoJS from "crypto-js";
import { Logger } from "../logger";

export interface ILocalStorageManager {
  saveObject<T>(key: string, object: T): void;
  getObject<T>(key: string): T | null;
  removeObject(key: string): void;
}

export class LocalStorageManager implements ILocalStorageManager {
  private static _instance: ILocalStorageManager;
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Retrieve an object by giving a key
   * @param key
   */
  getObject<T>(key: string): T | null {
    try {
      const hash = localStorage.getItem(key);
      if (hash) {
        const decipher = CryptoJS.AES.decrypt(
          hash,
          process.env.NODE_ENV === "test"
            ? ""
            : (process.env.REACT_APP_SECRET as string),
        );
        if (
          process.env.NODE_ENV === "development" ||
          process.env.REACT_APP_ENV === "development"
        ) {
          return JSON.parse(hash) as T;
        } else {
          return JSON.parse(decipher.toString(CryptoJS.enc.Utf8)) as T;
        }
      }
    } catch (e) {
      Logger.getInstance().error(String(e));
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
      const str = CryptoJS.AES.encrypt(
        JSON.stringify(object),
        process.env.NODE_ENV === "test"
          ? ""
          : (process.env.REACT_APP_SECRET as string),
      );
      if (
        process.env.NODE_ENV === "development" ||
        process.env.REACT_APP_ENV === "development"
      ) {
        localStorage.setItem(key, JSON.stringify(object));
      } else {
        localStorage.setItem(key, str.toString());
      }
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
      localStorage.removeItem(key);
    } catch (e) {
      Logger.getInstance().error(String(e));
    }
  }
}
