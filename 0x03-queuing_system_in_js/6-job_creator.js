import { createQueue } from 'kue';

const job = createQueue()
  .create('push_notification_code', {
    phoneNumber: '0666444555',
    message: 'This is the code to verify your account',
  })
  .save(() => {
    console.log(`Notification job created: ${job.id}`);
  });

job.on('complete', () => console.log('Notification job completed'));
job.on('failed', () => console.log('Notification job failed'));
