import axios from "axios";

export async function get(url) {
    const promise = axios
        .get(url, {
            headers: {
                Authorization: "" //Token if you have
            },
        })
        .then((response) => {
            // handle success
            return response.data;
        })
        .catch((error) => {
            console.log(error, "Error in GET Method");
            return error.response;
        });

    return promise;
}

export async function post(url, reqData) {
    const response = axios
        .post(url, reqData, {
            headers: {
                Authorization: "" //Token if you have"
            },
        })
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            console.log("Error in POST Method", error);
            return error.response;
        });
    return response;
}

export async function postLogin(url, reqData) {
    const response = axios
        .post(url, reqData, {
            headers: {},
        })
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            console.log("Error in POST Method", error);
            return error.response;
        });
    return response;
}

export async function Del(url, reqData) {

    const response = await axios
        .delete(url, reqData, {
            headers: {
                Authorization: "" //Token if you have
            },
        })
        .then((resp) => {
            // console.warn('RESPONSE ', resp.data);
            return resp.data;
        })
        .catch((error) => {
            console.warn("ERROR ", "DELETE REQUEST", error);
            return error.response;
        });
    return response;
}

export async function patch(url, reqData) {
    const response = axios
        .patch(url, reqData, {
            headers: {
                Authorization: "" //Token if you have
            },
        })
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            console.log("Error in PATCH Method", error);
            return error.response;
        });
    return response;
}
