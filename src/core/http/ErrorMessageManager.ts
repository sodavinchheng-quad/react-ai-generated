export type ErrorMessage = string;

export interface IErrorMessageManager {
  setErrorMessage(messages: Record<string, ErrorMessage>): void;
  getErrorMessage(code?: string): ErrorMessage;
}

export class ErrorMessageManager implements IErrorMessageManager {
  private static _instance: IErrorMessageManager;
  private messages: Record<string, ErrorMessage> = {};
  public static get Instance(): IErrorMessageManager {
    return this._instance || (this._instance = new this());
  }

  // DI
  constructor(messages?: Record<string, ErrorMessage>) {
    if (messages) {
      this.messages = messages;
    }
  }

  /**
   * Get error message by code
   * @param code
   */
  getErrorMessage(code?: string): ErrorMessage {
    if (code && code in this.messages) {
      return this.messages[code];
    }

    return "サーバーからの応答がありません"; // No response from server
  }

  /**
   * Set error messages
   * @param messages
   */
  setErrorMessage(messages: Record<string, ErrorMessage>): void {
    this.messages = messages;
  }
}
