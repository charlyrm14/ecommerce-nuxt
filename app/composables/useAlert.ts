type AlertType = 'success' | 'error' | 'warning' | 'info'

type Alert = {
    title: string
    description: string
    type: AlertType
    status: boolean
}

const alert = reactive<Alert>({
    title: '',
    description: '',
    type: 'success',
    status: false
})

export function useAlert() {

    const handleAlert = (title: string, description: string, type: AlertType) => {
        alert.title = title   
        alert.description = description
        alert.type = type
        alert.status = true
        resetAlert()
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.title = ''   
            alert.description = ''
            alert.type = 'success'
            alert.status = false 
        }, 4000);
    }

    return {
        alert,
        handleAlert
    }
}