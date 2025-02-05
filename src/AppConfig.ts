export interface IAppConfig {
  LocalStorageKey: Record<string, string>;
  CookieKey: Record<string, string>;
}

export class AppConfig implements IAppConfig {
  private static _instance: IAppConfig;
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  readonly LocalStorageKey = {
    accessToken: "t__xxx_access_token",
  };

  readonly CookieKey = {};
}
