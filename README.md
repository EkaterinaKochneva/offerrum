# Gulp сборка (html + SCSS) В РАЗРАБОТКЕ

## Основные команды

- Скачать сборку: 
```
git clone git@github.com:EkaterinaKochneva/project-template.git
```
- Установка зависимостей: 
```
npm install
```
- Запуск проекта в режиме разработки: 
```
npm run dev
```
- Сборка проекта для продакшена: 
```
npm run build
```
- Деплой проекта на гитхаб в ветку build: 
```
npm run deploy
```
- Создать папку страницы: 
```
npm run new:page
```
- Создать папку компонента: 
```
npm run new:block
```
## Структура основных папок и файлов
```
├── gulp/                         # папка с настройками и задачами Gulp
│   ├── config                    # папка с настройками и путями
│   │   └── app.js                # файл с некоторыми конфигурациями для Gulp
│   │   └── path.js               # файл с основными путями для Gulp
│   ├── tasks                     # папка с задачами Gulp
├── src/                          # исходники
│   ├── assets                    # папка для хранения используемых ресурсов
│   │   ├── fonts                 # папка для хранения шрифтов (шрифты размещать внутри в отдельных папках)
│   │   ├── icons                 # папка для хранения иконок, которые не нужно добавлять в svg-спрайт
│   │   ├── img                   # папка для хранения картинок
│   │   ├── lib                   # папка для хранения локальных библиотек
│   │   ├── sprite                # папка для преобразования svg-иконок в спрайт
│   ├── components                # папка для хранения компонентов страниц
│   │   ├── head                  # папка для хранения файлов head
│   │   │   └── index.html        # файл с разметкой head
│   │   ├── header                # папка для хранения файлов header
│   │   │   └── index.html        # html разметка header
│   │   │   └── index.js          # скрипты header
│   │   │   └── index.scss        # стили header
│   ├── js                        # папка для хранения основных скриптов
│   │   └── scripts.js            # главный файл скриптов, в который подключаются все остальные
│   ├── pages                     # папка для хранения страниц
│   │   ├── index                 # папка для хранения страницы с ссылками на остальные страницы
│   │   │   └── index.html        # html разметка страницы с ссылками на остальные страницы
│   │   ├── ui-kit                # папка для хранения страницы с версткой ui-компонентов
│   │   │   └── index.html        # html разметка страницы с версткой ui-компонентов
│   ├── styles                    # папка с файлами стилей
│   │   ├── global                # папка с основными стилями
│   │   │   └── _fonts.scss       # файл для подключения шрифтов
│   │   │   └── _normalize.scss   # файл для нормализации стилией normalize
│   │   │   └── _theme.scss       # файл для базовых стилей и контейнера
│   │   │   └── _typography.scss  # файл для основных стилей заголовков и параграфа
│   │   │   └── _vars.scss        # файл для переменных
│   │   └── mixins                # папка для scss-миксинов
│   │   └── main.scss             # главный файл стилей, в который подключаются все остальные
│   ├── ui                        # папка с основными ui-компонентами
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── README.md                     # документация сборки
```

## Html
Данный вариант сборки рассчитан на работу с html-файлами. Страницы необходимо создавать в директории `src/pages` следующим образом: создать папку с наименованием страницы, внутри папки файл `index.html` с вёрсткой, а также файлы  `index.scss` и `index.js` со стилями и скриптами при необходимости.
Для автоматического создания папки с необходимыми файлами можно использовать команду:
```
npm run new:page
```

Для блоков и компонентов предусмотрены папки `src/components` и `src/ui`. Блоки создаются по аналогии со страницами (папка для каждого блока, с файлами верстки, стилей и скриптов). Подключение блоков на страницу осуществляется конструкцией `@@include`.
Для автоматического создания папки с необходимыми файлами можно использовать команду:
```
npm run new:block
```
При создании папки можно будет выбрать, в какой директории (`src/components` или `src/ui`) её нужно будет создать.

## SCSS
Основной файл стилей - `src/styles/main.scss`. Файлы стилей отдельных компонентов и страниц должны располагаться в соответвующих папках `src/components/name` или `src/pages/name` и подключаться в основной файл стилей вручную конструкцией `@import`.

## JS
Основной файл скриптов - `src/js/scripts.js`. Файлы скриптов отдельных компонентов и страниц должны располагаться в соответвующих папках `src/components/name` или `src/pages/name` и подключаться в основной файл скриптов вручную конструкцией `//=include`.

## Шрифты
Для шрифтов предусмотрена папка `src/assets/fonts/`, каждый шрифт расположить в своей папке с названием, соответствующим шрифту. Поддерживаемые форматы: `eot,ttf,otf,woff,woff2`. При запуске сборки шрифты конвертируются в форматы `woff,woff2`. Эта задача не добавлена для отслеживания изменений. Запустить принудительную конвертацию шрифтов во время работы:

```
gulp fonts
```
Для подключения шрифтов предусмотрен миксин, подключение производится в файле `src/styles/global/_fonts.scss`. Затем необходимо раскомментировать подключение в файле `src/styles/main.scss`.

## Изображения
### Растровые изображения
Растровые изображения размещаются в папке `src/assets/img/`. Они автоматически конвертируются в формат `.webp`.
### Векторные изображения
Для svg-иконок, которые будут использоваться в спрайте, предусмотрена директория `src/assets/sprite/`. Спрайт выгружается в файл `assets/img/svg-sprite/sprite.svg`. Для использования на странице/в блоке:
```
<svg>
  <use xlink:href="assets/img/svg-sprite/sprite.svg#название-иконки"></use>
</svg>
```
Если нужны иконки вне спрайта, то для них предусмотрена папка `src/assets/icons/`. Выгружаются в папку:  `assets/img/icons`

## Сторонние библиотеки
Сторонние библиотеки, скаченные через npm, можно подключить в основные файлы scss и js. Но если хочется или требуется подключить их отдельно, можно воспользоваться папкой `src/assets/lib/`. Для js файла используется подключение `//=include "../../../node_modules/путь-до-необходимого-файла.js"`. Для стилей в любом случае нужно создать файл с раширением `.scss` и подключить стиль конструкцией `@import "../../../node_modules/путь-до-необходимого-файла.scss"`. **Если требуется подключить стиль с расширением `/css`, то расширение не указывается! Иначе срабатывает обычный импорт .css**
Файлы будут скопированы в директорию `assets/lib`, подключение в верстку производится вручную.