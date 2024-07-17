import React from 'react'
import AppRoutes from './routes'

const App = () => {
    if (window.location.host.startsWith('www.')) {
        window.location.href = window.location.href.replace('www.', '')
        return null // Stop rendering to prevent further execution
    }

    return (
        <div>
            <AppRoutes />
        </div>
    )
}
export default App
