export async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`); 

        if (!response.ok) {
            throw new Error (`HTTP status ${response.status}`);
        };

        const data = await response.json();
        return data.articles
    } catch (error) {
        console.log(`There was a problem: ${error}`);
    };
};