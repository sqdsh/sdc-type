/* jshint esversion: 6 */

import axios from "axios";
export function request(options: object) {
    return new Promise((resolve, reject) =>
        axios(options)
            .then((data) => resolve(data.data))
            .catch((error) => reject(error.data))
    );
}