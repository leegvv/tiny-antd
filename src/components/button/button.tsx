import classNames from 'classnames';
import React from 'react';
import {tuple
} from '../_util/type';

const ButtonSizes = tuple('lg', 'sm');
export type ButtonSize = typeof ButtonSizes[number];

const ButtonTypes = tuple('primary', 'default', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
type ButtonHTMLType = typeof ButtonHTMLTypes[number];

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    children?: React.ReactNode;
}

type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

/**
 * Button
 */
const Button: React.FC<ButtonProps> = (props) => {
    const {
        type = 'default',
        className,
        disabled = false,
        size,
        href,
        children,
        ...restProps
    } = props;

    const classes = classNames(
        'btn',
        className,
        {
            [`btn-${type}`]: type,
            [`btn-${size}`]: size,
            disabled: (type === 'link') && disabled
        }
    );

    if (type === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            className={classes}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;

