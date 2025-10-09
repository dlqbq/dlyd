function sign() {
    return fetch('http://dlyd.tuopukeji.cn/dlyd/api/attend/sign?openid=oN5WLjonhiTq-o_OiPF1Zpp95C3E&f=member', {
        method: 'POST',
    }).then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.error(err);
            return err;
        });
}

exports = module.exports = sign;