import axios from "axios";
// Add bearer tokens to the axios headers
export const setAuthToken = (token: string) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
