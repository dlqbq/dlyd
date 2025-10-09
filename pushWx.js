function pushWx(title, content) {
    if (process.env.WX_PUSHSERVICE_KEY) {
        const url = `https://sc.ftqq.com/{_sckey}.send?text=${encodeURIComponent(title)}&desp=${encodeURIComponent(content)}`;
        fetch(url.replace('{_sckey}', process.env.WX_PUSHSERVICE_KEY), {
            method: 'GET',
        }).then(res => res.json()).then(res => {
            console.log('微信推送结果:', res);
        }).catch(err => {
            console.error('微信推送失败:', err);
        });
    } else {
        console.log('未配置微信推送服务');
    }
}