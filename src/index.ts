import './index.scss'
const wechatpayIcon = require('./images/wechatpay_icon.svg').default
const alipayIcon = require('./images/alipay_icon.svg').default

enum PayTypes {
    'link' = 1,
    'qrcode' = 2
}

interface PayOption {
    iconWidth: string,
    iconHeight: string,
    QRWidth: string,
    text: string
}

interface PayItem { name: string, src: string, type?: PayTypes, icon?: string }
export class JsReward {
    bodyDom: HTMLElement = document.querySelector('body')
    QRBoxDom: HTMLElement
    QRCodeDom: HTMLImageElement
    MainBox: HTMLElement
    dbox: HTMLElement
    jsRewardDom: HTMLElement
    // 弹出dom
    mbox: HTMLElement
    // 预设icon
    icons: { [key: string]: any } = { wechatpayIcon, alipayIcon }
    // 支付列表
    payList: PayItem []

    constructor (jsRewardWarpId: string, payList: PayItem[], option: PayOption = { iconWidth: '80px', QRWidth: '200px', text: '感谢打赏', iconHeight: '30px'}) {
        this.mbox = document.getElementById(jsRewardWarpId)
        // js-reward
        this.jsRewardDom = document.createElement('div')
        this.jsRewardDom.classList.add('js-reward')
        

        // DonateText
        const donateTextWarpDom = document.createElement('a')
        donateTextWarpDom.classList.add('DonateText-warp')
        const donateTextWarTextpDom = document.createElement('div')
        donateTextWarTextpDom.id = 'DonateText'
        donateTextWarTextpDom.innerText = option.text
        donateTextWarpDom.append(donateTextWarTextpDom)
        this.jsRewardDom.append(donateTextWarpDom)

        // paylist
        const payListDom = document.createElement('div')
        payListDom.classList.add('pay-list')
        // github icon
        // 请尊重开源，保持署名连接
        const githubDom = document.createElement('a')
        githubDom.id = 'github'
        githubDom.href = 'https://github.com/callmesoul/js-reward' // 请尊重开源，保持署名连接
        githubDom.target = '_blank'
        payListDom.append(githubDom)
        this.jsRewardDom.append(payListDom)

        // QRBox
        this.QRBoxDom = document.createElement('div')
        this.QRBoxDom.id = 'QRBox'
        this.MainBox = document.createElement('div')
        this.MainBox.id = 'MainBox'
        this.MainBox.style.width = option.QRWidth
        this.QRCodeDom = document.createElement('img')
        this.MainBox.onclick = () => {
            this.hideQR()
        }
        this.MainBox.append(this.QRCodeDom)
        this.QRBoxDom.append(this.MainBox)
        this.jsRewardDom.append(this.QRBoxDom)



        for (let i = 0; i < payList.length; i++){
            if (!payList[i].icon && this.icons[`${payList[i].name}Icon`]) {
                payList[i].icon = this.icons[`${payList[i].name}Icon`]
            }
            const payItemDom = document.createElement('a')
            payItemDom.style.width = option.iconWidth
            payItemDom.style.height = option.iconHeight
            payItemDom.classList.add('pay-item')
            if (payList[i].type === 1){
                payItemDom.href = payList[i].src
                payItemDom.target = '_blank'
            } else {
                payItemDom.onclick = () => {
                    this.showQR(payList[i].src)
                }
            }
            const payItemDomImg = document.createElement('img')
            payItemDomImg.src = payList[i].icon
            payItemDomImg.alt = payList[i].name
            payItemDomImg.style.maxWidth = option.iconWidth
            payItemDomImg.style.maxHeight = option.iconHeight
            payItemDom.append(payItemDomImg)
            payListDom.append(payItemDom)
        }
        this.payList = payList
        this.render()
    }

    showQR (img: string): any{
        if (img) this.QRCodeDom.setAttribute('src', img)
        this.bodyDom.classList.add('blur')
        this.QRBoxDom.classList.add('fadeIn')
        this.MainBox.classList.add('showQR')
    }

    hideQR () {
        this.MainBox.classList.remove('showQR')
        this.MainBox.classList.add('hideQR')
        setTimeout(() => {
            this.QRBoxDom.classList.remove('fadeIn')
            this.MainBox.classList.remove('hideQR')
            this.bodyDom.classList.remove('blur')
        }, 600)
    }
    
    render () {
        this.mbox.append(this.jsRewardDom)
    }
}