import {useEffect, useState} from 'react'
import HeroSection from "../components/Home/Hero";
import IssuesSection from "../components/Home/Issues";
import api from "../services/api";
import {Issue} from "../interfaces/issues.interface";

export default function Home() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllIssues = async () => {
            const cachedData = localStorage.getItem('me-contrata/issues');
            if (cachedData != null) {
                const {issues, timestamp} = JSON.parse(localStorage.getItem('me-contrata/issues') as string);

                const oneHour = 60 * 60 * 1000;
                if (Date.now() - timestamp < oneHour) {
                    return issues;
                } else {
                    localStorage.removeItem('me-contrata/issues');
                }
            }

            const issues = [];
            let page = 1;
            const perPage = 100;
            let hasMore = true;

            try {
                while (hasMore) {
                    const response = await api.get(
                        `/repos/frontendbr/me-contrata/issues`,
                        {
                            params: {
                                state: "open",
                                page,
                                per_page: perPage,
                            },
                        }
                    );

                    issues.push(...response.data);

                    hasMore = response.data.length === perPage;
                    page += 1;
                }

                return issues;
            } catch (error) {
                return [];
            }
        };

        fetchAllIssues()
            .then((issues) => {
                setIssues(issues)

                const toStorage =  {
                    issues: issues,
                    timestamp: Date.now()
                };

                localStorage.setItem('me-contrata/issues', JSON.stringify(toStorage));
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        loading ? (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        ) : (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
                <HeroSection/>

                <IssuesSection
                    issues={issues}
                    page={currentPage}
                    setPage={setCurrentPage}
                />
            </div>
        )
    )
}

