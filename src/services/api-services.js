
import axios from 'axios';

import { apiConstants, apiHeaders } from '../constants/strings';


const api = axios.create({
    timeout: 100000,
    headers: {
    }
});

export const HttpGet = async (endPoint, queryParams = {}) => {
    try {
        if (typeof (endPoint) == "string") {
            let result = await api.get(endPoint, {
                params: queryParams
            });
            return result;
        }
    } catch (error) {
        throw JSON.parse(error.request._response).message.data.error.description;
    }
}

export const HttpPost = async (endPoint, body = {}) => {
    try {
        if (typeof (endPoint) == "string") {
            let result = await api.post(endPoint, body);
            return result;
        }
        throw new Error("Incorrect request");
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}