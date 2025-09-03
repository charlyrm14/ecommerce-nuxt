type MessageType = 'success' | 'error' | 'warning' | 'info'

type Message = {
    title: string
    type: MessageType
    status: boolean
}

const message = reactive<Message>({
    title: '',
    type: 'success',
    status: false
})

export function useMessageAlert() {

    const handleMessage = (title: string, type: MessageType) => {
        message.title = title   
        message.type = type
        message.status = true
        resetMessage()
    }

    const resetMessage = () => {
        setTimeout(() => {
            message.title = ''   
            message.type = 'success'
            message.status = false 
        }, 4000);
    }

    return {
        message,
        handleMessage
    }
}