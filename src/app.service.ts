import { Injectable } from '@nestjs/common';
const list = [
  { id: '1', name: 'Tarun', age: 100 },
  { id: '2', name: 'Ronak', age: 10 },
  { id: '3', name: 'aaloo', age: 2 },
];
@Injectable()
export class AppService {
  getUsers(): object {
    return {
      isSuccess: true,
      list: list,
    };
  }
  getUserInfo(id: string): object {
    const findObj = list.find((cur) => cur.id == id);
    return { isSuccess: findObj ? true : false, findObj };
  }
}
