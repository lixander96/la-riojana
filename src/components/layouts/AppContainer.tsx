import { Box } from '@mui/material'
import { style } from '@mui/system'
import React, { PropsWithChildren } from 'react'

// const AppBarButton = style()()

const AppContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    const height = 30
  return (
    <>
    <Box
        display="flex"
        flexDirection='row'
        justifyContent='flex-end'
        height={height}
        bgcolor={'#282c34'}
        position='absolute'
        top={0}
        right={0}
        left={0}
    >

    </Box>
    <Box
        position='absolute'
        top={height}
        right={0}
        left={0}
        minHeight={`calc(100vh - ${height})`}
        bgcolor='#363a42'
    >
        {children}
    </Box>
    </>
  )
}

export default AppContainer