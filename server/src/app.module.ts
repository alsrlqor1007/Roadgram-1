import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { SearchModule } from './search/search.module';
import { CommentsModule } from './comment/comment.module';
import { LikesModule } from './likes/likes.module';
import { FollowModule } from './follow/follow.module';
import { typeORMConfig } from 'config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
    ArticlesModule,
    SearchModule,
    CommentsModule,
    LikesModule,
    FollowModule
  ],
})
export class AppModule {}
