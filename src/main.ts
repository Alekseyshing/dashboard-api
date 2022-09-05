import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { TYPES } from "./types";
import { UserController } from "./users/users.controller";
import 'reflect-metadata';
import { IUserService } from "./users/users.service.interface";
import { IUserController } from "./users/users.controller.interface";
import { UserService } from "./users/users.service";
import { IConfigService } from "./config/config.service.interface";
import { ConfigService } from "./config/config.service";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
  bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
  bind<IUserController>(TYPES.UserController).to(UserController);
  bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
  bind<App>(TYPES.Application).to(App);
}); 

function bootstrap(){
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.Application);
  app.init();
  return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
