const amqp = require('amqplib')
const config = require('@config').rabbitmq;

class RabbitMQ {

    constructor() {
        this.connection = null;
        this.channel = null;

        this.createConnection.bind(this);
        this.createChannel.bind(this);
    }

    async createConnection() {
        this.connection = await amqp.connect(config);
    }

    async createChannel(exchange, queue, routingKey) {
        if (this.connection) {
            this.channel = await this.connection.createConfirmChannel();

            await this.channel.assertExchange(exchange, "direct", { durable: true });

            await this.channel.assertQueue(queue, { durable: true });

            await this.channel.bindQueue(exchange, queue, routingKey);
        }
    }

    async createChannelRPCServer(queueName) {
        if (this.connection) {
            this.channel = await this.connection.createConfirmChannel();

            await this.channel.assertQueue(queueName, { durable: true });

            await this.channel.prefetch(1);
        }
    }

    async createChannelRPCClient(queueName) {
        if (this.connection) {
            this.channel = await this.connection.createConfirmChannel();

            await this.channel.assertQueue('', { exclusive: true });
        }
    }
}

module.exports = RabbitMQ;