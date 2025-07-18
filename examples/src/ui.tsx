import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    spacing?: number;
    direction?: 'row' | 'column';
}
export const Stack: React.FC<StackProps> = ({
    spacing = 2,
    direction = 'column',
    className = '',
    style,
    children,
    ...props
}) => {
    return (
        <div
            className={`${direction === 'row' ? 'flex flex-row' : 'flex flex-col'} ${className}`}
            style={{ gap: `${spacing * 0.5}rem`, ...(style || {}) }}
            {...props}
        >
            {children}
        </div>
    );
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'h4' | 'h5' | 'body1';
}
export const Typography: React.FC<TypographyProps> = ({ variant = 'body1', className = '', children, ...props }) => {
    const Tag = variant === 'h4' || variant === 'h5' ? variant : 'p';
    const variantClass = variant === 'h4' ? 'text-2xl font-bold' : variant === 'h5' ? 'text-xl font-semibold' : '';
    return React.createElement(Tag, { className: `${variantClass} ${className}`, ...props }, children);
};

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => {
    return (
        <div className={`mx-auto px-4 max-w-screen-md ${className}`} {...props}>
            {children}
        </div>
    );
};

// eslint-disable-next-line react/prop-types
export const Switch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
    <input type='checkbox' className={`h-4 w-4 ${className}`} {...props} />
);

export interface FormControlLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    label: React.ReactNode;
    control: React.ReactElement;
}
export const FormControlLabel: React.FC<FormControlLabelProps> = ({ label, control, className = '', ...props }) => (
    <label className={`flex items-center gap-2 ${className}`} {...props}>
        {React.cloneElement(control)}
        {label}
    </label>
);

// eslint-disable-next-line react/prop-types
export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = '', ...props }) => (
    <a className={`text-blue-600 hover:underline ${className}`} {...props} />
);

export const InputAdornment: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = '', ...props }) => (
    <span className={`pointer-events-none ${className}`} {...props} />
);

export const AccountCircle: React.FC = () => <span>👤</span>;
