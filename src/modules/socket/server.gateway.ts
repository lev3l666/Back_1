import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { SocketService } from './socket.service';
import { AuthSocketGuard } from './auth-socket-guard';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from '../auth/auth.repository';
import { InjectRepository } from '@nestjs/typeorm';

@UseGuards(AuthSocketGuard)
@WebSocketGateway(3030, {
  transports: ['websocket', 'polling'],
})
export class ServerGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private logger = new Logger(ServerGateway.name);

  constructor(private readonly service: SocketService,
              @InjectRepository(AuthRepository)
              private readonly authRepository: AuthRepository,
              private readonly jwtService: JwtService) {
  }

  afterInit(server: Server) {
    this.logger.log('Init socket');
    this.service.setServer(server);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`channel connected:  | ${client.id}`);
    const authToken: string = client.handshake?.query?.token;
    const value: any = this.jwtService.decode(authToken);
    if (value) {
      const user = await this.authRepository.findOne({ email: value.email });
      if (user) {
        this.service.pushConnection(user.id, client);
      }
    } else if (authToken !== 'palegoldenrod') {
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    this.service.removeConnection(client);
    this.logger.log(`channel disConnected:  | ${client.id}`);
  }

  @SubscribeMessage('ecryptService')
  ecryptService(@ConnectedSocket() client: Socket) {
    this.service.setEncryptSocket(client);
    this.server.emit('isEncryptOnline', this.service.isEncryptOnline());
  }

  @SubscribeMessage('isEncryptOnline')
  idCryptOnline() {
    return this.service.isEncryptOnline();
  }
}
