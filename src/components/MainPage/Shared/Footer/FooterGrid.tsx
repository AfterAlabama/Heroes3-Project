import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FooterGridItems from './FooterGridItems';

const FooterGrid = () => {
	const GridItemsHeads = ['Продукт', 'Компания', 'Ресурсы', 'Медиа', 'Legal'];

	const GridItems = [
		['Обзор', 'Истории', 'Характеристики', 'Арена', 'Правила', 'Что-то еще'],
		['О нас', 'Карьера', 'Пресса', 'Новости', 'Медиа', 'Контакт'],
		['Блог', 'Бюллетень', 'События', 'Центр', 'Туториалы', 'Помощь'],
		['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'],
		['Условия', 'Приватность', 'Cookie', 'Лицензии', 'Настройки', 'Контакт'],
	];

	const gridItemsArray = GridItemsHeads.map((item, index) => (
		<FooterGridItems
			key={index}
			GridItemsHead={item}
			GridItems={GridItems[index]}
		/>
	));

	return (
		<Box>
			<Grid
				columnSpacing={10}
				container
			>
				{gridItemsArray}
			</Grid>
		</Box>
	);
};

export default FooterGrid;
