import { createQueue } from 'kue';

const jobs = [
  {
    phoneNumber: '0666444551',
    message: 'In order to verify your account, enter code 1234'
  },
  {
    phoneNumber: '0666444552',
    message: 'In order to verify your account, enter code 4562'
  },
  {
    phoneNumber: '0666444553',
    message: 'In order to verify your account, enter code 4321'
  },
  {
    phoneNumber: '0666444554',
    message: 'In order to verify your account, enter code 4562'
  },
  {
    phoneNumber: '0666444555',
    message: 'In order to verify your account, enter code 4321'
  },
  {
    phoneNumber: '0666444556',
    message: 'In order to verify your account, enter code 4562'
  },
  {
    phoneNumber: '0666444557',
    message: 'In order to verify your account, enter code 4321'
  },
  {
    phoneNumber: '0666444558',
    message: 'In order to verify your account, enter code 4562'
  },
  {
    phoneNumber: '0666444559',
    message: 'In order to verify your account, enter code 4321'
  },
  {
    phoneNumber: '0666444550',
    message: 'In order to verify your account, enter code 4562'
  },
  {
    phoneNumber: '0666444560',
    message: 'In order to verify your account, enter code 4321'
  }
];

const queue = createQueue();

jobs.forEach((element) => {
  let job = queue.create('push_notification_code_2', element).save((error) => {
    if (!error) console.log(`Notification job created: ${job.id}`);
  });

  job.on('complete', function() {
    console.log(`Notification job ${job.id} completed`);
  }).on('failed', function(error) {
    console.log(`Notification job ${job.id} failed: ${error}`);
  }).on('progress', function(progress, data) {
    console.log(`Notification job ${job.id} ${progress}% complete`);
  });
});
