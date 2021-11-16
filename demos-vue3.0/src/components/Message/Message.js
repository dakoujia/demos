import createInstance from './Instance.js'

function renderMsg(typeConfig = {}, cfg = '') {
    const isContent = typeof cfg === 'string'

    cfg = isContent ? { content: cfg } : cfg

    const config = Object.assign({}, typeConfig, cfg)

    const {
        type = 'text',
        content = '',
        icon = '',
        duration = 3000,
        close = false,
    } = config

    return createInstance({
        type,
        content,
        duration,
        icon,
        close,
    })
}

export default {
    text(cfg = '') {
        const textCfg = {
            type: 'text',
            icon: '',
        }
        return renderMsg(textCfg, cfg)
    },
    success(cfg = '') {
        const successCfg = {
            type: 'success',
            icon: 'ri-checkbox-circle-fill',
        }
        return renderMsg(successCfg, cfg)
    },
    error(cfg = '') {
        const errorCfg = {
            type: 'error',
            icon: 'ri-close-circle-fill',
        }
        return renderMsg(errorCfg, cfg)
    },
}
