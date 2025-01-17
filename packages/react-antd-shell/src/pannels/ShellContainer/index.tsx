import { useToken } from "antd/es/theme/internal"
import React, { memo, useMemo } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useThemeMode } from "@rxdrag/react-core"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.token?.colorBgBase};
`

export const ShellContainer = memo((
  props: {
    children?: React.ReactNode
  }
) => {
  const [, token] = useToken()
  const themeMode = useThemeMode()
  const theme = useMemo(() => {
    return {
      token
    }
  }, [token])

  return (
    <ThemeProvider theme={theme}>
      <Container className={themeMode}>
        {props.children}
      </Container>
    </ThemeProvider>
  )
})