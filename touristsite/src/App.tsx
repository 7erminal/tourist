import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import { ParallaxProvider } from 'react-scroll-parallax';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ParallaxProvider>
                    <RootComponent />
                </ParallaxProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
