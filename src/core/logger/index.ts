import dayjs from "dayjs";

export enum LogLevel {
  Debug,
  Info,
  Warn,
  Error,
}

export class Logger {
  private readonly level: LogLevel;
  private static instance: Logger;

  private constructor(level: LogLevel) {
    this.level = level;
  }

  public static getInstance(level: LogLevel = LogLevel.Info): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(level);
    }
    return Logger.instance;
  }

  private log(level: string, message: string): void {
    console.log(
      `[${dayjs().format("YYYY-MM-DD HH:mm:ss")}][${level}] ${message}`,
    );
  }

  private getCaller(): string {
    const stackTrace = new Error().stack?.split("\n") ?? [];
    // stackTrace[0] is the Error constructor
    // stackTrace[1] is the getCaller() method
    // stackTrace[2] is the method that called getCaller()
    // stackTrace[3] is the method that called the previous method, and so on
    // We want to find the first stack frame that's not part of the Logger class
    for (let i = 2; i < stackTrace.length; i++) {
      if (!stackTrace[i].includes("Logger.")) {
        return stackTrace[i].trim();
      }
    }
    // If we can't find a stack frame that's not part of the Logger class,
    // just return the last stack frame
    return stackTrace[stackTrace.length - 1]?.trim();
  }

  public debug(message: string): void {
    if (this.level <= LogLevel.Debug) {
      this.log("DEBUG", message);
    }
  }

  public info(message: string): void {
    if (this.level <= LogLevel.Info) {
      this.log("INFO", message);
    }
  }

  public warn(message: string): void {
    if (this.level <= LogLevel.Warn) {
      this.log("WARN", message);
    }
  }

  public error(message: string): void {
    if (this.level <= LogLevel.Error) {
      this.log("ERROR", message);
    }
  }
}
