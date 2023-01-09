// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { RandoBase } from '../dto/rando-dto';

export type RandoDocument = Rando & mongoose.Document;

@Schema({ timestamps: true })
export class Rando extends RandoBase {
  @Prop() name?: string;
  @Prop() location?: string;
  @Prop() adress: string;
  @Prop() photo: string;

}

export const RandoSchema = SchemaFactory.createForClass(Rando);
