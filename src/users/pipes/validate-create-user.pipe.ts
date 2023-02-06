import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUser');
    console.log(value);
    console.log(metadata);
    const parseToInt = parseInt(value.age.toString());
    if (isNaN(parseToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid Data Type for property age. Expected Number',
        HttpStatus.BAD_GATEWAY,
      );
    }
    console.log(`${value.age} is returning...`);
    return { ...value, age: parseToInt };
  }
}
