const moment = require('moment');
let now = moment();
moment.locale('ru');
console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
// понедельник, март 1 2021, 17:31:03

let weekAfter = moment().add('days', 7);
moment.locale('ru');
// moment().format('dddd'); 
console.log(now.format('dddd'));
// понедельник, март 8 2021