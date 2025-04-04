import React from 'react'

import { ConfigProvider } from 'antd'

function ThemeProvider({children}: {children: React.ReactNode}){
    return (
      <ConfigProvider
        theme={
            {
                token : {
                   colorPrimary: '2C1D79',
                   borderRadius: 2
                },
                components : {
                    Button : {
                        controlHeight: 36,
                        controlOutline: 'none'
                    },
                    Input : {
                        controlHeight: 45,
                        controlOutline: 'none'
                    }
                }
            }
        }>
        {children}
      </ConfigProvider>
    )
}


export default ThemeProvider