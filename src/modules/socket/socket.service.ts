import { Injectable, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class SocketService {
  private logger = new Logger(SocketService.name);
  private server: Server;
  private encrypClient: Socket = null;
  private sockets: Array<{
    user: any,
    channel: string,
    socket: Socket,
  }> = [];

  emitToUser(userId, event: string, data?: any) {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    const channels = this.sockets.filter(el => {
      return el.user === userId;
    });
    channels.forEach(channel => {
      channel.socket.emit(event, data);
      this.logger.log(`emit event ${event} | ${channel ? channel.socket.id : 'disconnect'} | data(${data})`);
    });
    if (!channels.length) {
      this.logger.log(`channel no found for user ${userId} | ${event} | `);
    }
  }

  emitToUsers(usersId, event, data?) {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    const channels = this.sockets.filter(el => {
      return usersId.includes(el.user);
    });
    channels.forEach((channel) => channel.socket.emit(event, data));
  }

  emitToAll(event: string, data?) {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    this.logger.log(`emit event ${event} | toAll | data(${data})`);
    this.server.emit(event, data);
  }

  setServer(server: Server) {
    this.server = server;
  }

  pushConnection(userId: number, socket: Socket) {
    this.sockets.push({
      user: userId,
      channel: socket.id,
      socket,
    });
    this.logger.log(`User connect: ${userId} | ${socket.id}`);
    const log = this.sockets.map(el => ({ id: el.user, channel: el.channel }));
    this.logger.log(`${JSON.stringify(log)}`);
  }

  removeConnection(socket: Socket) {
    const index = this.sockets.findIndex((so) => so.channel === socket.id);
    this.sockets.splice(index, 1);

    if (this.encrypClient && socket.id === this.encrypClient.id) {
      this.encrypClient = null;
      this.server.emit('isEncryptOnline', this.isEncryptOnline());
    }
  }

  setEncryptSocket(client: Socket) {
    if (!this.encrypClient) {
      this.encrypClient = client;
    }
  }

  emitToEncryptFiles(data) {
    if (this.encrypClient !== null) {
      this.encrypClient.emit('encryptTheseFiles', data);
    } else {
      this.logger.log('el servicio de encriptacion no esta en linea');
    }
  }

  isEncryptOnline() {
    return this.encrypClient !== null;
  }
}
