import { render } from '@testing-library/react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';

export const renderTheme = (children) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}