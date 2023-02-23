import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClientDocument = Client & Document;

@Schema({ collection :'brandsalelist' })
export class Client {

  @Prop()
  date: Date;

  @Prop()
  brand: string;

  @Prop({ type: String, enum: ["Facilitation", "Trading"] })
  transactionType: "Facilitation" | "Trading";

  @Prop()
  totalOrders: number;

  @Prop()
  totalOrderValue: number;

  @Prop()
  grossMarginPercentage: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

}

export const ClientSchema = SchemaFactory.createForClass(Client);
