const axios = require("axios");

const API_URLS = {
    primes: "http://20.244.56.144/evaluation-service/primes",
    fibo: "http://20.244.56.144/evaluation-service/fibo",
    even: "http://20.244.56.144/evaluation-service/even",
    rand: "http://20.244.56.144/evaluation-service/rand",
};

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAwODczLCJpYXQiOjE3NDM2MDA1NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM3ZDk4NDQ1LTJjNDItNDZkMy1hYTc2LTZmM2VkMGQ3ZjdkZCIsInN1YiI6IjIyMDUxMTU4QGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1MTE1OEBraWl0LmFjLmluIiwibmFtZSI6ImRyaXN0aSBzcml2YXN0YXZhIiwicm9sbE5vIjoiMjIwNTExNTgiLCJhY2Nlc3NDb2RlIjoibndwd3JaIiwiY2xpZW50SUQiOiJjN2Q5ODQ0NS0yYzQyLTQ2ZDMtYWE3Ni02ZjNlZDBkN2Y3ZGQiLCJjbGllbnRTZWNyZXQiOiJXUFNWc0JQUnRWY3dmcG56In0.e2UenJcY0ldlGV7SyZexhbgnY1pPi3LaP148wwiByLw";  // Replace with actual token

exports.getNumbersFromAPI = async (type) => {
    try {
        const response = await axios.get(API_URLS[type], {
            timeout: 500,
            headers: {
                "Authorization":` Bearer ${AUTH_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        return response.data.numbers || [];
    } catch (error) {
        console.error("API Fetch Error:", error.message);
        return [];
    }
};