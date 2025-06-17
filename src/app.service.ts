import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      isSuccess: true,
      list: [
        { name: 'Tarun', age: 100 },
        { name: 'Ronak', age: 10 },
      ],
    };
  }
}
