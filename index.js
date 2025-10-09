const sign = require('./sign');
const pushWx = require('./pushWx');

sign().then(res => {
    const content = JSON.stringify(res);
    pushWx('签到结果', content);
}).catch(err => {
    console.error('签到过程出现错误:', err);
});