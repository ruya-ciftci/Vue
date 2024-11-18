import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string; // Yüklenen fotoğrafın URL'si

  @Prop({ required: true })
  body: string; // Gönderinin ana metni

  @Prop({ default: Date.now })
  createdAt: Date; // Oluşturulma tarihi
}

export const PostSchema = SchemaFactory.createForClass(Post);
