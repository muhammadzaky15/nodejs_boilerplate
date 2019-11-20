const Amqp = require('@common/broker/common.broker.js')

class RabbitMQService extends Amqp {
    constructor() {
        super();
        this.publishMsg.bind(this);
    }

    async publishMsg(routingKey, exchangeName, queueName, data) {
        await this.createConnection();
        await this.createChannel(exchangeName, queueName, routingKey);

        return new Promise((resolve, reject) => {
                this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function(err, ok) {
                    if (err) {
                        return reject(err);
                    }

                    resolve();
                })

            }

        );
    }
    async publishMessage() {
        // const Rabbitmq = require('@common/services/publisher.common.service.js');
        // const rabbitmq = new Rabbitmq();
        // const res = rabbitmq.publishMsg('user', 'user', 'user', 'Nama');

        const UserMq = require('@user/services/pubsub.user.service.js');
        const userMq = new UserMq();

        const res = userMq.pubSubMessageClient('userRPC', 'User', 'asdqwe');

        res.then(data => console.log(data));
    }

    publishMessage()
}

module.exports = RabbitMQService;