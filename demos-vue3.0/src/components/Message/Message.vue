<template>
    <transition name="slide-fade">
        <div class="message-container" v-show="visibled">
            <div :class="contentClasses">
                <div class="message-icon" v-if="config.icon">
                    <i :class="[config.icon, 'icon']"></i>
                </div>
                <span v-text="config.content"></span>
                <div class="option" v-if="!config.close">
                    <i class="ri-close-fill icon" @click.stop="onClose"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
export default {
    props: {
        config: {
            type: Object,
            default: () => {},
        },
        remove: {
            type: Function,
            default: () => {},
        },
    },
    setup(props) {
        const state = reactive({ visibled: false })
        const contentClasses = computed(() => [
            'message-content',
            `message-${props.config.type}-immersive`,
        ])
        const onOpen = config => {
            setTimeout(() => {
                state.visibled = true
            }, 10)
            if (config.duration !== 0) {
                setTimeout(() => {
                    onClose()
                }, config.duration)
            }
        }

        const onClose = () => {
            state.visibled = false
            setTimeout(() => {
                props.remove()
            }, 200)
        }

        onOpen(props.config)

        return {
            ...toRefs(state),
            contentClasses,
            onOpen,
            onClose,
        }
    },
}
</script>
