const context = require("./context");

async function sign() {
    if (context.DLYD_SIGN_URL && context.DLYD_OPENID) {

        const signUrl = `${context.DLYD_SIGN_URL}`.replace('${openid}', context.DLYD_OPENID);
        try {
            /**
             * 返回示例
             * { resCode: '0000', resDesc: 'success', data: 0 }
             */
            const signResult = await fetch(signUrl, {
                method: 'POST',
            });
            const signData = await signResult.json();
            console.log('签到请求返回:', signData);
            return { code: signData.code, message: signData.resDesc, data: signData.data };
        } catch (error) {
            console.error('签到请求失败:', error);
            return { code: '5002', message: '签到请求失败' };
        }
    } else {
        console.error('签到配置缺失，请检查环境变量 DLYD_SIGN_URL 和 DLYD_OPENID');
        return { code: '5001', message: '签到配置缺失' };
    }
}

exports = module.exports = sign;
