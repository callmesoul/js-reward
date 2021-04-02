import './index.scss'
const qqpayIcon = require('./images/qqpay_icon.svg').default
const wechatpayIcon = require('./images/wechatpay_icon.svg').default
const alipayIcon = require('./images/alipay_icon.svg').default
const paypalIcon = require('./images/paypal_icon.svg').default

enum PayTypes {
    'link' = 1,
    'qrcode' = 2
}

interface PayItem { name: string, src: string, type: PayTypes, icon?: string }
export class JsReward {
    payListDom: string = ''
    // 弹出dom
    mbox: HTMLElement
    // 预设icon
    icons: { [key: string]: any } = { qqpayIcon, wechatpayIcon, alipayIcon, paypalIcon }
    // 支付列表
    payList: PayItem []
    constructor (jsRewardWarpId: string, payList: PayItem[]) {
        this.mbox = document.getElementById(jsRewardWarpId)
        for (let i = 0; i < payList.length; i++){
            if (!payList[i].icon && this.icons[`${payList[i].name}Icon`]) {
                payList[i].icon = this.icons[`${payList[i].name}Icon`]
            }
            this.payListDom += `<li>
                <a href="https://www.paypal.me/ihoey" target="_blank">
                    <img src="${payList[i].icon}" alt="${payList[i].name}" />
                </a>
            </li>`
        }
        this.payList = payList
        console.log(this.payList)
        this.render(jsRewardWarpId)
    }

    // payItem () {
    //     if (QR) mbox.style.backgroundImage = `url(${ QR })`
    //     bd.classList.add('blur')
    //     qbox.classList.add('fadeIn')
    //     mbox.classList.add('showQR')
    // }
    
    render (jsRewardWarpId: string) {
        const dom = document.getElementById(jsRewardWarpId)
        dom.innerHTML = `
            <div class="js-reward">
                <a class="DonateText-warp">
                    <div id="DonateText" class="tr3">感谢打赏</div>
                </a>
                <ul id="donateBox" class="list  tr3">
                    <a id="github" href="https://github.com/houyi1121/Playing-reward" target="_blank" class=" tr3" title="Github"></a>
                    ${this.payListDom}
                </ul>
                <div id="QRBox" class=" left-100">
                    <div id="MainBox"></div>
                </div>
            </div>
        `
    }
}