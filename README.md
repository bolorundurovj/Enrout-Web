<h1 align="center">Enrout</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>UDRS is a web-based system built using Angular that provides a platform for students and staff of the university to manage and route documents efficiently. With UDRS, you can easily upload, track, and receive documents within the university's network, making it easier to manage your day-to-day activities.
</i>
  <br>
</p>

<p align="center">
  <a href="enrout-ui-git-dev-bolorundurovj.vercel.app/"><strong>enrout-ui-git-dev-bolorundurovj.vercel.app/</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/bolorundurovj/enrout-ui/issues">Submit an Issue</a>
  <br>
  <br>
</p>
<hr>

## ️⚗️ Key Features

- User authentication for staff and students
- Document upload and management
- Document routing and tracking
- Notifications and alerts for new and pending documents
- Secure document storage and retrieval
- User-friendly interface

## ⚗️ Technical Features

- Lazy loading
- Standalone components
- OS/Light/Dark modes
- Strongly-typed storage
- TailwindCSS

## 🛠️ Tweaks

- TailwindCSS configuration:

  You can find the `tailwind.config.js` file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.

- Set default theme (first time load)

  Go to `src\app\lib\constants.ts` and choose the default theme.

  OS preference

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'system' as const;
  ```

  Light mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'light' as const;
  ```

  Dark mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'dark' as const;
  ```

- Enable a new local/session storage item

  Go to `src\app\lib\utils\storage\storage.types.ts` and add a new item name in the `StorageObjectType` type and a new key value pair in the `StorageObjectMap` type.

  ![image](https://user-images.githubusercontent.com/64181348/173276010-a4b95a63-2fe0-4104-9b09-34eeea5f0025.png)

  After that, you can use the new item.
  ![image](https://user-images.githubusercontent.com/64181348/173276575-09322722-387d-4c20-95af-fa9915079e3a.png)

## ⛩️ Project structure

```console
├───app
│   ├───lib
│   │   ├───components
│   │   │   ├───footer
│   │   │   ├───layouts
│   │   │   │   └───layout-horizontal
│   │   │   ├───logo
│   │   │   └───navbar
│   │   ├───guards
│   │   ├───interceptors
│   │   ├───interfaces
│   │   ├───enums
│   │   ├───services
│   │   │   ├───auth
│   │   │   └───theme
│   │   └───utils
│   │       └───storage
│   └───pages
│       ├───auth
│       │   ├───login
│       │   └───register
│       ├───home
│       ├───profile
│       ├───screens
│       │   └───not-found
│       └───settings
│           ├───accessibility
│           ├───account
│           └───appearance
├───assets
├───environments
└───theme
    ├───01-base
    ├───02-components
    ├───03-utilities
    └───tailwindcss
```

## 🧙‍♂️ Commands

| Command  | Description                                                 | NPM              | Yarn          | PNPM          | Background command                              |
| -------- | ----------------------------------------------------------- | ---------------- | ------------- | ------------- | ----------------------------------------------- |
| ng       | See available commands                                      | npm run ng       | yarn ng       | pnpm ng       | ng                                              |
| start    | Run app in development mode                                 | npm start        | yarn start    | pnpm start    | ng serve                                        |
| build    | Build app for production                                    | npm run build    | yarn build    | pnpm build    | ng build                                        |
| watch    | Run build when files change                                 | npm run watch    | yarn watch    | pnpm watch    | ng build --watch --configuration development    |
| test     | Run unit tests                                              | npm run test     | yarn test     | pnpm test     | ng test                                         |
| test:run | Run unit tests with headless browser and without watch mode | npm run test:run | yarn test:run | pnpm test:run | ng test --watch=false --browsers ChromeHeadless |
| lint     | Lint code                                                   | npm run lint     | yarn lint     | pnpm lint     | ng lint                                         |

## Contributing

We welcome contributions to UDRS. If you want to contribute, please follow these steps:

1. Fork the UDRS repository.
2. Create a new branch for your changes.
3. Make the necessary changes.
4. Commit your changes and push to your fork.
5. Create a pull request to the main UDRS repository.

## Support

If you encounter any issues while using UDRS, please open a new issue in the UDRS repository. We will respond to your issue as soon as possible.

## License

UDRS is released under the MIT License. See the [LICENSE](LICENSE) file for details.
