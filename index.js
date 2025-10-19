require('./log');
const sign = require('./sign');
const pushWx = require('./pushWx');

(async () => {
    try {
        const signResult = await sign()
        await pushWx(`签到结果: ${signResult.resDesc}`, JSON.stringify(signResult));
    } catch (error) {
        console.error('签到过程出现错误:', err);
        process.exit(1);
    }
})();
