import { CustomError } from "./custom-error";

export class InternalServerError extends CustomError {
  statusCode = 500;
  constructor() {
    super("interval server error");

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: "internal server error" }];
  }
}
