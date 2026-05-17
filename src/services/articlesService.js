import { mockArticles } from "./mockArticles";

export async function getArticles() {
    try {
        const response = await fetch(
            `https://gnews.io/api/v4/search?q=technology&apikey=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return data.articles
    } catch (error) {
        console.log("5 - ERROR EN getSource", error);
        
        return mockArticles;
    };
    
};