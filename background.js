require('module-alias/register');

const UserMq = require('@user/services/pubsub.user.service.js');
const userMq = new UserMq();

const res = userMq.pubSubMessageServer('userRPC');

res.then(data => console.log(data));