import React from 'react';
import { Stack, Typography } from './ui';

export const Limitations = () => {
    return (
        <Stack spacing={2.5}>
            <Stack spacing={0.5}>
                <Typography variant='h5'>Limitations</Typography>
                <ul>
                    <li>
                        <Typography>Customization options are limited currently.</Typography>
                    </li>
                    <li>
                        <Typography>
                            Mentions splitting across two lines in a multiline field may render incorrectly.
                        </Typography>
                    </li>
                </ul>
            </Stack>
        </Stack>
    );
};
