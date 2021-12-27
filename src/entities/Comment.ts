import Entity from './Entity';
import User from './User';
import Post from './Post';
import { makeId } from '../util/helpers';
import {
    Entity as TOEntity,
    Index,
    Column,
    BeforeInsert,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
@TOEntity('comments')
export default class Comment extends Entity {
    constructor(comment: Partial<Comment>) {
      super();
      Object.assign(this, comment);
    }
    @Index()
    @Column()
    identifier: string;

    @Column()
    body: string;

    @Column()
    username: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'username', referencedColumnName: 'username' })
    user: User;

    @ManyToOne(() => Post, post => post.comments, { nullable: false })
    post: Post;

    @BeforeInsert()
    makeIdAndSlug() {
      this.identifier = makeId(8);
  }
}