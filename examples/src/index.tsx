import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Adornment } from './Adornment';
import { AppendSpaceOnAdd } from './AppendSpaceOnAdd';
import { AsychronousData } from './AsynchronousData';
import { Basic } from './Basic';
import { Color } from './Color';
import { Controlled } from './Controlled';
import { DisplayTransform } from './DisplayTransform';
import { Error } from './Error';
import { FormProps } from './FormProps';
import { FullWidth } from './FullWidth';
import { Limitations } from './Limitations';
import { Multiline } from './Multiline';
import { MultipleDataSources } from './MultipleDataSources';
import { Sizes } from './Sizes';
import { Trigger } from './Trigger';
import { Container, FormControlLabel, Link, Stack, Switch, Typography } from './ui';

const App = () => {
    const [dark, setDark] = useState(true);
    return (
        <div className={dark ? 'dark' : ''}>
            <Container className='py-5'>
                <Stack spacing={5}>
                    <Stack spacing={1}>
                        <Typography variant='h4'>@jackstenglein/mui-mentions</Typography>
                        <Typography>
                            Mention people in a <Link href='https://tailwindcss.com/'>Tailwind input</Link>.
                        </Typography>
                        <FormControlLabel
                            control={<Switch checked={dark} onChange={(e) => setDark(e.target.checked)} />}
                            label='Dark Mode'
                        />
                    </Stack>
                    <Basic />
                    <Trigger />
                    <MultipleDataSources />
                    <AppendSpaceOnAdd />
                    <DisplayTransform />
                    <AsychronousData />
                    <FormProps />
                    <Error />
                    <Multiline />
                    <Adornment />
                    <Sizes />
                    <FullWidth />
                    <Controlled />
                    <Color />
                    <Limitations />
                </Stack>
            </Container>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
