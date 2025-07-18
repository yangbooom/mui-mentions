import React from 'react';
import { MentionsTextField } from '../../src';
import { defaultValue, stormlight } from './data';
import { Stack, Typography } from './ui';

export const FullWidth = () => {
    return (
        <Stack spacing={2.5}>
            <Stack spacing={0.5}>
                <Typography variant='h5'>Full Width</Typography>
                <Typography>
                    The fullWidth prop can be used to make the input take up the full width of its container.
                </Typography>
            </Stack>

            <Stack spacing={2} alignItems='center'>
                <MentionsTextField
                    label='Full Width'
                    fullWidth
                    defaultValue={defaultValue}
                    dataSources={[
                        {
                            data: stormlight,
                        },
                    ]}
                />

                <MentionsTextField
                    label='Not Full Width'
                    defaultValue={defaultValue}
                    dataSources={[
                        {
                            data: stormlight,
                        },
                    ]}
                />
            </Stack>
        </Stack>
    );
};
