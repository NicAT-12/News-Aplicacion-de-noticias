export async function getSource() {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines/sources?apiKey=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data.sources;

    } catch (error) {
        console.log("5 - ERROR EN getSource", error);
        throw error;
    };
};