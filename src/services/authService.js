import axios from "axios";
import { AUTH_URL } from "../constants/constants.js";

const instance = axios.create({
    baseURL: AUTH_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const SignUpService = async (userData) => {
    try {
        const response = await instance.post("/signup", userData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to sign up. Please try again later.");
    }
};
