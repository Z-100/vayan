# Vayan - Portfolio/CV page

Basically the title

I'm not a React- nor frontend-dev, but I'm trying my best :)

## Run the app

Clone the repository using the terminal or your IDE:

```shell
> git clone https://github.com/Z-100/vayan.git
```

After cloning the repository, open any terminal at the project's root directory - (That's the folder containing the
package.json file).

Then run the following command:
```shell
> npm i -D
```

If you try to start the app now, it'll probably start but won't work properly. That's because some very important
configuration is missing: The `.env.local` stuff.

Create a file called `.env.local` at the project root and fill in the information below:
```properties
REACT_APP_ENV=DEV
POSTGRES_HOST=...
POSTGRES_URL=...
POSTGRES_USER=...
POSTGRES_PASSWORD=...
POSTGRES_DATABASE=...
```

To start the app, simply run the following command in that very same terminal:
```shell
> npm run start
```

## CI/CD

## Useful docs

[Tailwind size comparison](https://www.techighness.com/post/size-conversion-cheatsheet-pixel-tailwind-classes-rem/)

