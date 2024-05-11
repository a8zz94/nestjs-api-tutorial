import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'This is message from sign up service' };
  }

  signin() {
    return { msg: 'This is a message from sign in service' };
  }
}
