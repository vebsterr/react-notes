// ! Добавление стилей
// % 1. CSS модули
// % 2. CSS in JS(Библиотека Emotion)
// % 3. Напрямую через инлайн css
// % 4. SASS модули
// % 5. Ванильный CSS

// @ ---------------------------------------------

// ! CSS модули
// Создаем папку куда кидаем наш компонент Card.jsx
// Создаем файл Card.module.css и туда кидаем наши стили
// Импортируем файл со стилями в файл компонента
// Добавляем нужные классы в разметку компонента

// @ Файл стилей
// .title {
//    margin-top: 0;
//    text-align: center;
//    text-transform: uppercase;
// }

// @ Файл компонента
// import css from './PageTitle.module.css'

// % css в данном случае является объектом, а классы это его свойства
// % Пропс стилей называется className
// export const PageTitle = ({ text }) => {
//    return <h1 className={css.title}>{text}</h1>
// }

// @ ---------------------------------------------

// ! CSS in JS (Библиотека Emotion)
// 1. Ставим пакетики npm i @emotion/styled @emotion/react
// 2. Создаем файл компонента App.jsx
// 3. Создаем файл стилей App.styled.jsx
// 4. В файле стилей импортируем библиотеку '@emotion/styled'
// 5. В файле стилей создаем компонент библиотеки, указываем его тег и методом шаблонных строк прописываем для него стили
// 6. В файле компонента импортируем css-компонент
// 7. Оборачиваем нужную разметку в css-компонент

// @ Файл стилей
// import styled from '@emotion/styled'

// export const Container = styled.div`
//    padding: 150px;
// `

// @ Файл компонента
// import { Title } from 'components/PageTitle/PageTitle.styled'

// export const PageTitle = ({ text }) => {
//    return <Title>{text}</Title>
// }

// ! Функции внутри css-компонента
// % Поскольку стили мы прописываем в шаблонной строке, мы можем подставить значение динамически, через функцию с помощью интерполяции (не забываем, это обычный js файл)

// @ Пример
// export const Chip = styled.span`
//    position: absolute;
//    top: 4px;
//    right: 4px;
//    padding: 4px 8px;
//    border-radius: 4px;
//    text-transform: uppercase;
//    color: #fff;

// % В параметр props будет приходить объект со всеми пропсами данного компонента
//    background-color: ${props => {
//       switch (props.eventType) {
//          case 'free':
//             return 'var(--color-green)'
//          case 'paid':
//             return 'var(--color-blue)'
//          case 'vip':
//             return 'var(--color-red)'
//          default:
//             return '#000'
//       }
//    }};
// `

// ! Вложенная стилизация
// % Так же как в SASS, мы можем создавать вложенные селекторы
// export const Info = styled.p`
//    display: flex;
//    align-items: center;
//    margin-top: 0;
//    margin-bottom: 8px;
//    color: var(--color-primary-text);
//    font-size: 16px;
//    line-height: 24px;
//    font-weight: 400;
//    letter-spacing: 0.25px;

// % Так обращаемся к вложенным элементам внутри данного компонента
//    svg {
//       display: block;
//       margin-right: 8px;
//       color: var(--color-secondary-text);
//    }

// % И в первом и во втором случае hover применится на родительский класс
//    :hover {
//       color: blue;
//    }

//    &:hover {
//       color: blue;
//    }
// `

// ! Тема проекта
// 1.Импортируем компонент темы из библиотеки в место где будем оборачивать разметку в тему(например в index.js)
// 2.У данного компонента есть обязательный пропс(объект) theme куда мы заливаем нашу тему
// 3.Оборачиваем разметку в нашу тему
// 4.Теперь в файлах [name].styled.jsx, в функциях компонентов, у параметра props появится свойство theme, через которое мы можем достучатся до любого нужного свойства внутри темы

// в объекте theme свойства должны называться согласно спецификации ThemeUI (https://theme-ui.com/theme-spec), а значения свойств могут быть произвольными

// @ index.js
// import { ThemeProvider } from '@emotion/react'

// const theme = {
//    white: '#ffffff',
//    black: '#010101',
//    green: '#4caf50',
//    red: '#f44336',
//    blue: '#2196f3',
//    primaryText: '#212121',
//    secondaryText: '#757575',
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//    <React.StrictMode>
//       <ThemeProvider theme={theme}>
//          <App />
//       </ThemeProvider>
//    </React.StrictMode>
// )

// @ Card.styled.jsx
// export const Chip = styled.span`
//    position: absolute;
//    top: 4px;
//    right: 4px;
//    padding: 4px 8px;
//    border-radius: 4px;
//    text-transform: uppercase;
//    color: #fff;

//    background-color: ${({ eventType, theme }) => {
//       switch (eventType) {
//          case 'free':
//             return theme.green
//          case 'paid':
//             return theme.blue
//          case 'vip':
//             return theme.red
//          default:
//             return '#000'
//       }
//    }};
// `

// ! ---------------------------------------------------------------------------------------------------------------

// ! Styled system и работа с темой (компонент "Box")
// @ ---------------------------------------------

// % Emotion, спецификация темы и styled-system, работают вместе поэтому во время рендера данного компонента вместо #fff мы можем передавать в пропсы ИМЕНА свойств(не путь в теме) из нашей темы.
// % Если мы пишем bg либа знает что нужно искать в теме свойство colors из спецификации, потому и нужно называть свойства в теме строго как в спецификации

// 1. импортируем библиотеку
// 2. импортируем нужные свойства
// 3. в новом файле создаем компонент "Box", вносим туда импортируемые свойства и экспортируем его
// 4. импортируем данный компонент в файл рендеринга и оборачиваем им нужную нам разметку
// 5. теперь при рендеринге нам доступны пропсы нужных нам свойств (space, layout, color). Названия пропсов есть в доках

// @ Файл Box.jsx
// import styled from 'styled-components';
// import { space, layout, color } from 'styled-system';

// export const Box = styled('div')(space, layout, color);

// @ Файл App.jsx
// import { Box } from './Box';

// export const App = () => {
//   return (
//   <Box bg="accent" pt={5} width="50%">
//       <Text>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </Text>
//       <Button>Search</Button>
//     </Box>
//   );
// };

// % для того, чтобы изменить тег переиспользуемого элемента, при рендеринге передаем пропс as="section" - данная фича идет из Emotion
// @ ---------------------------------------------
