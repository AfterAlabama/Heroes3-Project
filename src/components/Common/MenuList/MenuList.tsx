import List, { ListProps } from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton, {
	ListItemButtonProps,
} from '@mui/material/ListItemButton';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

interface MenuListProps {
	//main list props
	listProps?: ListProps;
	listSxProp?: SxProps<Theme>;
	//list items and their props
	listItems: string[];
	listItemProps?: ListItemProps;
	listItemSxProp?: SxProps<Theme>;
	//list item button props and its click handler
	listItemButtonProps?: ListItemButtonProps;
	listItemButtonSxProp?: SxProps<Theme>;
	listItemButtonClickHandler: (listItem: string) => void;
	//list item icon display condition and its props
	listItemIconCondition: (listItem: string) => ReactNode;
	listItemIconProps?: ListItemIconProps;
	listItemIconSxProp?: SxProps<Theme>;
	//list item text props
	listItemTextProps?: ListItemTextProps;
	listItemTextSxProp?: SxProps<Theme>;
}

//creates a customizable menu list
const MenuList: FC<MenuListProps> = ({
	listItems,
	listItemButtonClickHandler,
	listItemIconCondition,
	listProps,
	listItemProps,
	listItemButtonProps,
	listItemIconProps,
	listItemTextProps,
	listItemButtonSxProp = [],
	listItemIconSxProp = [],
	listItemSxProp = [],
	listSxProp = [],
	listItemTextSxProp = [],
}) => {
	return (
		<List
			{...listProps}
			sx={GetSxProp(listSxProp)}
		>
			{listItems.map((listItem) => (
				<ListItem
					key={listItem}
					disablePadding
					{...listItemProps}
					sx={GetSxProp(listItemSxProp)}
				>
					<ListItemButton
						onClick={() => listItemButtonClickHandler(listItem)}
						{...listItemButtonProps}
						sx={GetSxProp(listItemButtonSxProp)}
					>
						<ListItemIcon
							{...listItemIconProps}
							sx={GetSxProp(listItemIconSxProp)}
						>
							{listItemIconCondition(listItem)}
						</ListItemIcon>
						<ListItemText
							primary={listItem}
							{...listItemTextProps}
							sx={GetSxProp(listItemTextSxProp)}
						/>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

export default MenuList;
