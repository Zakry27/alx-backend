import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

describe('createPushNotificationsJobs', () => {
  const queue = kue.createQueue();

  before(() => {
    queue.testMode.enter();
  });

  afterEach(() => {
    queue.testMode.clear();
  });

  after(() => {
    queue.testMode.exit();
  });

  it('should display an error message if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs('not an array', queue)).to.throw('Jobs is not an array');
  });

  it('should create two new jobs to the queue', () => {
    const jobs = [
      {
        phoneNumber: '0666444222',
        message: 'In order to verify your account, enter code 1234.'
      },
      {
        phoneNumber: '0666555222',
        message: 'In order to verify your account, enter code 4562.'
      }
    ];
    createPushNotificationsJobs(jobs, queue);
    expect(queue.testMode.jobs.length).to.equal(2);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[0].data).to.deep.equal(jobs[0]);
    expect(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[1].data).to.deep.equal(jobs[1]);
  });
});