
// 开发环境地址
const config: Record<string, string> = {
    app1: 'http://127.0.0.1:3001',
    app2: 'http://127.0.0.1:3002',
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
    // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
    Object.keys(config).forEach((key) => {
        config[key] = window.location.origin
    })
}


export default config