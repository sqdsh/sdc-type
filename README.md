# sdc-api
Враппер для [SD.C API](https://docs.server-discord.com) на TypeScript

## Установка
```sh
$ npm install github:sqdshcom/sdc-type
```

## Инициализация враппера
```ts
let token:
    string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2MzIwMzA3Mjk5MDY0MjE4NiIsInBlcm1zIjowLCJpYXQiOjE1ODE3NTk3NDZ9.sSLJnNNeTPF4bOIEqWBlYAZyfJn_TZATUu0A3-I3txI";
// API ключ можно получить на странице редактирования вашего бота

import { SDC } from "sdc-type";
import { IGuild, IGuildPlace, IWarns, IAutoPost, IError } from "sdc-type/interfaces";
const client = new SDC(token);
```

## Примеры кода
```ts
// Получить информацию о сервере на мониторинге
client.guild("400215724184043530")
    .then((data: IGuild) => {
        console.info(data);
        /* {
            "avatar": string,
            "lang": string,
            "name": string,
            "des": string,
            "invite": string,
            "online": number,
            "members": number,
            "bot": number,
            "boost": number,
            "status": number,
            "upCount": number,
            "tags": string
        } */
    });


// Получить текущее место сервера на мониторинге
client.guildPlace("400215724184043530")
    .then((data: IGuildPlace) => {
        console.info(data);
        /* {
            "place": number
        } */
    });

// Получить список пользователей проголосовавших за сервер
client.guildRated("400215724184043530")
    .then((data) => {
        console.info(data);
        /* {
            "178404926869733376": 1,
            "279220345767198723": 1,
            "340938899285344258": 1,
            "368463408112205826": 1,
            "418712700848439318": 1,
            "533245137216864286": 1,
            "684985279743918100": -1
        } */
    });

// Получить список серверов за которые проголосовал пользователь
client.userRated("178404926869733376")
    .then((data) => {
        console.info(data);
        /* {
            "400215724184043530": 1,
            "640586112624230450": -1,
        } */
    });

// Проверка на варны
client.warns("178404926869733376")
    .then((data: IWarns) => {
        console.info(data);
        /* {
            "id": string,
            "type": string,
            "warns": number
        } */
    });

// Отправлять статистику на мониторинг каждые 15 минут
client.setAutoPost("563203072990642186", { servers: 153, shards: 1 })
    .then((data: IAutoPost) => {
        console.info(data);
        /* {
            "status": boolean
        } */
    });
```
