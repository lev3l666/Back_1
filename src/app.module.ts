import { SiteModule } from './modules/site/site.module';
import { DsgOptionsTwoModule } from './modules/vehicles-dsg-options-two/dsg-options-two.module';
import { DsgOptionsModule } from './modules/vehicles-dsg-options/dsg-options.module';
import { VehiclesOptionsTwoModule } from './modules/vehicles-options-two/vehicles-options-two.module';
import { Combo_pricesModule } from './modules/combo_prices/combo_prices.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { UserVerificationModule } from './modules/user-verification/user-verification.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { VehiclesOptionsModule } from './modules/vehicles-options/vehicles-options.module';
import { VehiclesPricesModule } from './modules/vehicles-prices/vehicles-prices.module';
import { VehiclesDsgModule } from './modules/vehicles-dsg/vehicles-dsg.module';
import { VehiclesFileModule } from './modules/vehicles-file/vehicles-file.module';
import { CreditModule } from './modules/credit/credit.module';
import { UserNetworkModule } from './modules/user-network/user-network.module';
import { OrderCustomSoftwareModule } from './modules/order-custom-software/order-custom-software.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { OrderSoftwareModule } from './modules/order-software/order-software.module';
import { ConnectionModule } from './modules/connection/connection.module';
import { SupportModule } from './modules/support/support.module';
import { SupportStatusModule } from './modules/support-status/support-status.module';
import { SupportCategoryModule } from './modules/support-category/support-category.module';
import { SupportMessageModule } from './modules/support-message/support-message.module';
import { FilesModule } from './modules/files/files.module';
import { SocketModule } from './modules/socket/socket.module';
import { ProductReadyModule } from './modules/product-ready/product-ready.module';
import { CreditOrderModule } from './modules/credit-order/credit-order.module';
import { CreditPriceModule } from './modules/credit-price/credit-price.module';
import { CreditMovementModule } from './modules/credit-movement/credit-movement.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SiteModule,
    DsgOptionsTwoModule,
    DsgOptionsModule,
    VehiclesOptionsTwoModule,
    Combo_pricesModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    CompanyModule,
    UserVerificationModule,
    VehiclesModule,
    VehiclesOptionsModule,
    VehiclesPricesModule,
    VehiclesDsgModule,
    VehiclesFileModule,
    CreditModule,
    UserNetworkModule,
    OrderCustomSoftwareModule,
    SubscriptionModule,
    OrderSoftwareModule,
    ConnectionModule,
    SupportModule,
    SupportStatusModule,
    SupportCategoryModule,
    SupportMessageModule,
    FilesModule,
    SocketModule,
    ProductReadyModule,
    CreditOrderModule,
    CreditPriceModule,
    CreditMovementModule,
  ],
})
export class AppModule {
  static port: number | string;

  constructor() {
    AppModule.port = Configuration.PORT;
  }
}
