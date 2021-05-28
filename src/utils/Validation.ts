import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';
import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

export class Validation extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    options = options !== undefined ? options : {};
    options.exceptionFactory = errors => {
      const errorResponse = {};
      errors.forEach((error) => {
        errorResponse[error.property] = error.constraints;
      });
      return new UnprocessableEntityException(errorResponse);
    };
    super(options);
  }
}
