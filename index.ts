/* jshint esversion: 6 */

import { request } from "./request";
import { stringify } from "querystring";

let apiPath:
    string = "https://api.server-discord.com/v2";

interface IOptions {
    url: string,
    method: string,
    headers: any,
    data: any
}

function options (token: string, uri: string, method: string = "GET", data: any = null) {
    let optionsData:
        IOptions = {
            url: apiPath + uri,
            method: method,
            headers: {
                Authorization: 'SDC ' + token
            },
            data: null
        };

    if(data !== null) {
        optionsData.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        optionsData.data = stringify({ servers: data.servers, shards: data.shards });
    }
    return optionsData;
}

export class SDC {
    apiKey: string;
    constructor(token: string) {
        this.apiKey = token;
    }

    guild(id) {
        return new Promise((resolve, reject) =>
            request( options(this.apiKey, `/guild/${id}`) )
                .then(resolve, reject)
        );
    }

    guildPlace(id) {
        return new Promise((resolve, reject) =>
            request( options(this.apiKey, `/guild/${id}/place`) )
                .then(resolve, reject)
        );
    }

    guildRated(id) {
        return new Promise((resolve, reject) =>
            request( options(this.apiKey, `/guild/${id}/rated`) )
                .then(resolve, reject)
        );
    }

    userRated(id) {
        return new Promise((resolve, reject) =>
            request( options(this.apiKey, `/user/${id}/rated`) )
                .then(resolve, reject)
        );
    }

    warns(id) {
        return new Promise((resolve, reject) =>
            request( options(this.apiKey, `/warns/${id}`) )
                .then(resolve, reject)
        );
    }

    /**
     * Attention! Данная функция не имеет проверки на совместимость с определённой библиотекой.
     * Если вы хотите помочь, ждём Pull Request.
     * */
    setAutoPost(id: string, stats: object = { servers: 0, shards: 1 }, interval: number = 900000) {
        return new Promise((resolve, reject) => {
            request( options(this.apiKey, `/bots/${id}/stats`, "POST", stats) )
                .then(resolve, reject)

            setInterval(() => {
                request( options(this.apiKey, `/bots/${id}/stats`, "POST", stats) )
                    .then(resolve, reject)
            }, interval);
        });
    }
}