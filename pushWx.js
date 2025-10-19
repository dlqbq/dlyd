const context = require('./context');

async function pushWx(title, desp) {
    if (process.env.WX_PUSHSERVICE_KEY && context.WX_PUSHSERVICE_URL) {
        const pushUrl = context.WX_PUSHSERVICE_URL
            .replace('${sckey}', process.env.WX_PUSHSERVICE_KEY)
            .replace('${title}', encodeURIComponent(title))
            .replace('${desp}', encodeURIComponent(desp));
        try {
            /**
             * 返回示例
             * {
             *  code: 0,
             *  message: '',
             *  data: {
             *      pushid: '14940762',
             *      readkey: 'SCT7XkmNLOE1cOL',
             *      error: 'SUCCESS',
             *      errno: 0
             *  }
             *  }
             */
            const pushResult = await fetch(pushUrl, {
                method: 'GET',
            })
            const pushData = await pushResult.json();
            console.log('推送请求返回:', pushData);
            return { code: pushData.code, message: pushData.message, data: pushData.data };
        } catch (error) {
            console.error('推送请求失败:', error);
            return { code: '5003', message: '推送请求失败' };
        }
    } else {
        console.error('推送服务配置缺失，请检查环境变量 WX_PUSHSERVICE_KEY 和 WX_PUSHSERVICE_URL');
        return { code: '5004', message: '推送服务配置缺失' };
    }
}

exports = module.exports = pushWx;
