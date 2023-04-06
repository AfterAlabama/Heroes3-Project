import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FooterGridItems from './FooterGridItems';

const FooterGrid = () => {
	const gridItemsHeads = ['Продукт', 'Компания', 'Ресурсы', 'Медиа', 'Legal'];

	const gridItems = [
		['Обзор', 'Истории', 'Характеристики', 'Арена', 'Правила', 'Что-то еще'],
		['О нас', 'Карьера', 'Пресса', 'Новости', 'Медиа', 'Контакт'],
		['Блог', 'Бюллетень', 'События', 'Центр', 'Туториалы', 'Помощь'],
		['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'],
		['Условия', 'Приватность', 'Cookie', 'Лицензии', 'Настройки', 'Контакт'],
	];

	const gridItemsArray = gridItemsHeads.map((item, index) => (
		<FooterGridItems
			key={index}
			GridItemsHead={item}
			GridItems={gridItems[index]}
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
