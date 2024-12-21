import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '@app/user/user.entity';
import { AuthGuard } from '@app/guards/auth.guard';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { FollowEntity } from './follow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  controllers: [ProfileController],
  providers: [ProfileService, AuthGuard],
  exports: [ProfileService],
})
export class ProfileModule {}
