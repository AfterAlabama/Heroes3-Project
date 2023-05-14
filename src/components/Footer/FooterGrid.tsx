import GridTable from '../Common/GridTable/GridTable';

const FooterGrid = () => {
	const footerItemsHeads = ['Продукт', 'Компания', 'Ресурсы', 'Медиа', 'Legal'];

	const footerItems = [
		['Обзор', 'Истории', 'Характеристики', 'Арена', 'Правила', 'Что-то еще'],
		['О нас', 'Карьера', 'Пресса', 'Новости', 'Медиа', 'Контакт'],
		['Блог', 'Бюллетень', 'События', 'Центр', 'Туториалы', 'Помощь'],
		['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'],
		['Условия', 'Приватность', 'Cookie', 'Лицензии', 'Настройки', 'Контакт'],
	];

	return (
		<GridTable
			th={footerItemsHeads}
			td={footerItems}
			gridContainerProps={{
				spacing: 10,
			}}
		/>
	);
};

export default FooterGrid;
