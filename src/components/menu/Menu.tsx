import React, {createContext, useState} from 'react';
import classNames from 'classnames';
import MenuItem, {MenuItemProps} from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children?: React.ReactNode;
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0});

const InternalMenu: React.FC<MenuProps> = (props) => {
    const {defaultIndex = 0, className, mode = 'horizontal', style, onSelect, children} = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex);
    const classes = classNames('menu', className, {'menu-vertical': mode === 'vertical'});

    const handleClick = (index: number) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    const menuContext: IMenuContext = {
        index: currentActive,
        onSelect: handleClick
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const {displayName} = childElement.type;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {index});
            }
            console.error('Warning: Menu has a child which is not a MenuItem component');
            return null;
        });
    };

    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={menuContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

interface CompoundedComponent extends React.FC<MenuProps> {
    Item: typeof MenuItem;
}

const Menu = InternalMenu as CompoundedComponent;

Menu.Item = MenuItem;

export default Menu;