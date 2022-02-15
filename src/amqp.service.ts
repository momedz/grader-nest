import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

// exchange = 'grader.job.topic'
// queue = 'grader.job.queue';

@Injectable()
export class AmqpService {
  send = (exchange: string, msg: string) => {
    amqp
      .connect('amqp://localhost')
      .then((connection) => {
        return connection
          .createChannel()
          .then((channel) => {
            const ok = channel.assertExchange(exchange, 'topic', {
              durable: false,
            });
            return ok.then(() => {
              channel.publish(exchange, '', Buffer.from(msg));
              console.log(" [x] Sent %s:'%s'", '', msg);
              return channel.close();
            });
          })
          .finally(() => connection.close());
      })
      .catch(console.warn);
  };
}
