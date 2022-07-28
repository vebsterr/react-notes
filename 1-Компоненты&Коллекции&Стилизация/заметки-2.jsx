//! Основное
// % При рендере нескольких елементов мы обязательно передаем ключ

// @ ---------------------------------------------

// ! Упрощенный абсолютный импорт
// @ Можно создать файл jsconfig.json и ввести в нем то что написано ниже
// {
//    "compilerOptions": {
//       "baseUrl": "src"
//    },
//    "include": ["src"]
// }
// @ Это значит что больше не нужно прописывать путь к компоненту через../
// @ Теперь vscode знает что это root ваших компонентов и позволяет обращатся к ним через 'components/App.jsx'

// @ ---------------------------------------------

// ! Иконки
// Импортируем библиотеку в файл где хотим использовать, и рендерим иконку как компонент
// import { FaBeer } from 'react-icons/fa';

// Размер 16px или 1em - по умолчанию
// class Question extends React.Component {
//    render() {
//       return (
//          <h3>
//             {' '}
//             Lets go for a <FaBeer size={16}/>?{' '}
//          </h3>
//       )
//    }
// }

// @ ---------------------------------------------

// ! Утилиты (помошники (например библиотека для роботы с датами))
// % Утилиты живут вне компонентов, в отдельной папке и просто импортируются в нужный файл

// % Для чистоты кода используют реэкспорт
// создаем отдельный js файл куда импортируем все утилиты
// import * from './'
// import * from './'
// import * from './'

// @ ---------------------------------------------

// ! Как правильно задавать propTypes
// PageTitle.propTypes = {
//    text: PropTypes.string.isRequired,
// }

// @ ---------------------------------------------

// ! Реэкспорт
// % чтобы сделать общий импорт из всей папки в один файл
// @ При именованом экспорте
// export const formatEventDuration = (start, end) => {
//    return formatDistanceStrict(Date.parse(start), Date.parse(end), { locale: ru })
// }

// % Можно создать в этой папке index.js и прописать там экспорты для именованых экспортов
// export * from './formatCardDistance'
// export * from './formatCardStart'

// @ При дефолтном экспорте
// export {default} from './'

// % И далее импортировать все одной строкой
// import { formatEventStart, formatEventDuration } from 'utils'
