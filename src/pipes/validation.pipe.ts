import { ArgumentMetadata, HttpException, HttpStatus, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export class CustomValidatioPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToClass(metadata.metatype, value);

    if (typeof object !== 'object') {
      return value;
    }

    const errors = await validate(object);

    if (!errors.length) {
      return value;
    }

    throw new HttpException(
      {
        errors: this.formatError(errors),
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }

  formatError(error: ValidationError[]) {
    return error.reduce((acc, error) => {
      acc[error.property] = Object.keys(error.constraints);
      return acc;
    }, {});
  }
}
