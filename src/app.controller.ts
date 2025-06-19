import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user/list')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('user/:id/info')
  getUserInfo(@Param('id') id: string) {
    return this.appService.getUserInfo(id);
  }

  @Get('user/help')
  helpToUser(){
    return {isSuccess:true, message:"nhi krunga help!"}
  }
}
