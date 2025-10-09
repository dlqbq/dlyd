fetch({
    method: 'POST',
    url: 'http://dlyd.tuopukeji.cn/dlyd/api/attend/sign?openid=oN5WLjonhiTq-o_OiPF1Zpp95C3E&f=member',
}).then(res => res.json())
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });