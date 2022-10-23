import {render, screen, fireEvent} from '@testing-library/react';
import Button, {ButtonProps} from './Button';

const defaultProps: ButtonProps = {
    onClick: jest.fn()
}

const differentProps: ButtonProps = {
    type: 'primary',
    size: 'lg',
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('render default button', () => {
        render(<Button {...defaultProps}>Nice</Button>);
        const element = screen.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })

    it('render by different props', () => {
        render(<Button {...differentProps}>Nice</Button>)
        const element = screen.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg klass');
    })

    it('render link', () => {
        render(<Button type='link' href='https://www.baidu.com'>Nice</Button>)
        const element = screen.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    })

    it('render disabled link', () => {
        render(<Button {...disabledProps}>Nice</Button>)
        const element = screen.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(defaultProps.onClick).not.toHaveBeenCalled();
    })
})