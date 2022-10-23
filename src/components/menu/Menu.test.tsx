import {render, screen, fireEvent, RenderResult, cleanup} from '@testing-library/react';
import Menu, {MenuProps} from './Menu';

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
};

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
};

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props} >
            <Menu.Item>active</Menu.Item>
            <Menu.Item disabled={true}>disabled</Menu.Item>
            <Menu.Item>xyz</Menu.Item>
        </Menu>
    );
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;

describe('test Menu component', () => {
    beforeEach(() => {
        render(generateMenu(testProps));
        menuElement = screen.getByTestId('test-menu');
        activeElement = screen.getByText('active');
        disabledElement = screen.getByText('disabled');
    });
    it('should render correct Menu based on default props',  () => {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('menu test');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });
    it('should change the active item when click the item', function () {
        const thirdItem = screen.getByText('xyz');
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    });
    it('should render vertical mode', () => {
        cleanup();
        render(generateMenu(testVerProps));
        const menuElement = screen.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    });


})
