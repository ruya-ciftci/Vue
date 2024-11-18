import { Controller, Post, Body } from '@nestjs/common';
import { PostsService } from '../../posts.service'; // Gönderi servisi
import { CreatePostDto } from '../dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
}

//reatePost(@Body() createPostDto: CreatePostDto) ile, POST isteğinin gövdesinde gönderilen veriler createPostDto parametresi olarak alınır. @Body() dekoratörü, isteğin gövdesindeki veriyi otomatik olarak createPostDto içine doldurur.
