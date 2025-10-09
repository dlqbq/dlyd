require('./log');
const sign = require('./sign');
const pushWx = require('./pushWx');

sign().then(res => {
    // if (res.resCode === '1112') {
    //     console.log('今日已签到，无需重复签到');
    // } else {
    pushWx('签到结果', JSON.stringify(res));
    // }
}).catch(err => {
    console.error('签到过程出现错误:', err);
});