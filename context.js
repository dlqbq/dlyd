const context = {
    WX_PUSHSERVICE_URL: process.env.WX_PUSHSERVICE_URL,  // e.g., https://sctapi.ftqq.com/${sckey}.send?text=${title}&desp=${desp}
    WX_PUSHSERVICE_KEY: process.env.WX_PUSHSERVICE_KEY, // get from https://sct.ftqq.com/r/18677
    DLYD_SIGN_URL: process.env.DLYD_SIGN_URL, // e.g., http://dlyd.tuopukeji.cn/dlyd/api/attend/sign?openid=${openid}&f=member
    DLYD_OPENID: process.env.DLYD_OPENID, // e.g., contact the developer to get your openid, QQ: 123099663
};

exports = module.exports = context;