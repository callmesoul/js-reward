# js-reward
美观,易用，可定制的js打赏组件

修改自[Playing-reward](https://github.com/ihoey/Playing-reward)
主要[Playing-reward](https://github.com/ihoey/Playing-reward)好像不维护了，也不可定制，使用麻烦等各种无问题，于是自己封装一个。

## 特点
- [x] 使用简单
- [x] 可定制

## 安装
1. npm 安装

    `npm install @callmesoul/js-reward --save`

2. 手动下载
   
   `dist/js-reward.js`

## 使用

1. 简单示例
   ```html
    <div id="js-reward-warp"></div>
   ```
   ```javascript
   import JsReward from '@callmesoul/js-reward'
   new JsReward(
       'js-reward-warp',
        [
            // 预设了微信支付和阿里支付图标,使用预设图标时 name 要对应，还原贡献图标
            { name: 'wechatpay', src: '../src/images/WeChanQR.png' },
            { name: 'alipay', src: '../src/images/AliPayQR.png'}
        ]
    )
   ```

2. 定制
   ```javascript
    new JsReward(
        '${DomId}',
        // 支付列表定义
        [
            // type === 1 跳转 2 图片 src：二维码图片/跳转地址 
            // icon 定制图标最好统一比例，不然不好看
            { name: 'wechatpay', src: '${qrcodeImg}', icon: '${icon}', type: 1},
        ],
        // 自定义参数
        {
            iconWidth: '80px', // 图标宽度
            iconHeight: '30px', // 图标高度
            QRWidth: '200px', // 二维码宽度，高度自适应
            text: '感谢打赏' // 显示文字
        }
    )
    ``

## 贡献

欢迎贡献代码或提建议

| <img src="https://callmesoul-blog.oss-cn-shenzhen.aliyuncs.com/qrcode_for_callmesoul.jpg" width = "200" style="display: inline-block;" alt="callmesoul公众号" align=center /> | <img src="https://callmesoul-blog.oss-cn-shenzhen.aliyuncs.com/callmesoul_weixin_pay.png" width = "200" style="display: inline-block;" alt="微信支付" align=center /> | <img src="https://callmesoul-blog.oss-cn-shenzhen.aliyuncs.com/callmesou_ali_pay.jpg" width = "200" alt="支付宝" style="display: inline-block;" align=top /> |