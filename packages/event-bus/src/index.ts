import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

const broker = process.env.KAFKA_BROKER || 'localhost:9092';

export class KafkaService {
  private kafka = new Kafka({ clientId: 'e-commerce', brokers: [broker] });
  private producer = this.kafka.producer();
  private consumers: Consumer[] = [];

  async emit(topic: string, message: unknown) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }

  async subscribe(
    topic: string,
    groupId: string,
    handler: (value: unknown) => Promise<void> | void,
  ) {
    const consumer = this.kafka.consumer({ groupId });
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
      eachMessage: async ({ message }: EachMessagePayload) => {
        const value = message.value?.toString();
        if (value) {
          await handler(JSON.parse(value));
        }
      },
    });
    this.consumers.push(consumer);
  }

  async disconnect() {
    await Promise.all([
      this.producer.disconnect(),
      ...this.consumers.map((c) => c.disconnect()),
    ]);
  }
}

export const kafkaService = new KafkaService();
