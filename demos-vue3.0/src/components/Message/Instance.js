import { createApp } from 'vue'
import Message from './Message.vue'

const createInstance = cfg => {
    const config = cfg || {}
    // 1、创建包裹容器，并设置外层的 Class 属性、消息计数
    let messageNode = document.createElement('div')
    let attr = document.createAttribute('class')
    attr.value = 'message'
    messageNode.setAttributeNode(attr)
    const height = 54 // 单个高度
    const messageList = document.getElementsByClassName('message')
    messageNode.style.top = `${messageList.length * height}px`

    // 2、创建实例并挂载到 body
    const app = createApp(Message, {
        config,
        remove: () => {
            handleRemove()
        },
    })
    app.vm = app.mount(messageNode)
    document.body.appendChild(messageNode)

    app.close = () => {
        handleRemove()
    }

    // 3、实现取消挂载方法，和取消挂载后重新计数
    const handleRemove = () => {
        app.unmount(messageNode)
        document.body.removeChild(messageNode)
        resetMsgTop()
    }

    const resetMsgTop = () => {
        for (let i = 0; i < messageList.length; i++) {
            messageList[i].style.top = `${i * height}px`
        }
    }
    return app
}

export default createInstance
