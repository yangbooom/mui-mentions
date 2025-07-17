import React from 'react';

interface MentionProps {
    /** The display string of the mention. */
    display: string;

    /** The color of the highlight. */
    color?: string;
}

const Mention: React.FC<MentionProps> = ({ display, color }) => {
    return (
        <span className='relative'>
            {display}
            <span
                className='absolute left-[-1px] top-[-2px] bottom-0 right-[-1px] rounded text-transparent'
                style={{ backgroundColor: color || '#bfdbfe' }}
            ></span>
        </span>
    );
};

export default Mention;
