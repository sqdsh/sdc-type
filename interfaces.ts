/* jshint esversion: 6 */

export interface IGuild {
    avatar: string,
    lang: string,
    name: string,
    des: string,
    invite: string,
    owner: string,
    online: number,
    members: number,
    bot: number,
    boost: number,
    status: number,
    upCount: number,
    tags: string
}

export interface IGuildPlace {
    place: number
}

export interface IWarns {
    id: string,
    type: string,
    warns: number
}

export interface IAutoPost {
    status: boolean
}

export interface IError {
    error: {
        message: string,
        type: string,
        code: number;
    };
}