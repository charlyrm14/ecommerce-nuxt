export const typeAlertIcon = (type: 'success' | 'error' | 'warning' | 'info' = 'success') => {

    const icons: Record<string, string> = {
        success: 'm4.5 12.75 6 6 9-13.5',
        error: 'M6 18 18 6M6 6l12 12',
        warning: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z',
        info: 'M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z',
    }

    return icons[type] || icons.success
}

export const typeColorAlert = (type: 'success' | 'error' | 'warning' | 'info' = 'success') => {

    const color: Record<string, string> = {
        success: 'green',
        error: 'red',
        warning: 'amber',
        info: 'blue'
    }

    return color[type]  || color.success
}