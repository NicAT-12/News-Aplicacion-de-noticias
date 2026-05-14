import { useEffect, useState } from 'react'
import { getSource } from "../services/sourceService";
import SourceCard from '../components/SourceCard';
import SkeletonCard from '../components/SkeletonCard';

import '../styles/pages/Source.scss';

const Sources = () => {
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(null);
    const [search, setSearch] = useState("");
    
    const skeletons = [1, 2, 3, 4, 5, 6];
    const filteredSources = sources.filter((source) => source.name.toLowerCase().includes(search.toLocaleLowerCase()));

    useEffect(() => {
        async function fetchData() {
            try {
                const sources = await getSource();
                setSources(sources);
            } catch (error) {
                setFail(error.message)
            } finally {
                setLoading(false);
            };
        };

        fetchData();
    }, [])

    if (fail) return <h1>{fail}</h1>

    return (
        <main className="sources">
            <header className="sources__header">
                <h2>News Sources</h2>
                <p>Explore trusted media providers from around the world.</p>
            </header>
            <div className="sources__search">
                <input placeholder='Buscar...' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            </div>
            <div className="source-grid">
                {
                    loading
                        ? skeletons.map((skeleton) => (
                            <SkeletonCard
                                key={skeleton}
                            />
                        ))
                        : filteredSources.map((source) => (
                            <SourceCard
                                key={source.id}
                                source={source}
                            />
                        ))
                }
            </div>
        </main>
    );
};

export default Sources;