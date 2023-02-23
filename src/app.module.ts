import { MongooseModule } from '@nestjs/mongoose';
// existng code hidden for the display purpose
import { Module } from '@nestjs/common';
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
@Module({
  imports: [
    MongooseModule.forRoot(
'mongodb+srv://brandlist:123pranshi@projectbrandlist.r5sgdlt.mongodb.net/brandsalelist?retryWrites=true&w=majority '    ),
   ClientModule,
  
  ],
  providers: [ClientService]
})
export class AppModule {}




