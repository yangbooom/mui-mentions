import React from 'react';
import { MentionsTextField } from '../../src';
import { defaultValue, stormlight, variants } from './data';
import { Stack, Typography } from './ui';

export const FormProps = () => {
    return (
        <Stack spacing={3}>
            <Stack spacing={0.5}>
                <Typography variant='h5'>Form Props</Typography>
                <Typography>
                    Form props from TextField such as required, disabled and helperText are still supported.
                </Typography>
            </Stack>

            <Stack spacing={1}>
                {variants.map((variant) => (
                    <Stack key={variant} direction='row' spacing={2}>
                        <MentionsTextField
                            variant={variant}
                            defaultValue={defaultValue}
                            label='Required'
                            required
                            fullWidth
                            dataSources={[
                                {
                                    data: stormlight,
                                },
                            ]}
                        />

                        <MentionsTextField
                            variant={variant}
                            defaultValue={defaultValue}
                            label='Disabled'
                            disabled
                            fullWidth
                            dataSources={[
                                {
                                    data: stormlight,
                                },
                            ]}
                        />

                        <MentionsTextField
                            variant={variant}
                            defaultValue={defaultValue}
                            label='Helper Text'
                            helperText='Some important text'
                            fullWidth
                            dataSources={[
                                {
                                    data: stormlight,
                                },
                            ]}
                        />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};
