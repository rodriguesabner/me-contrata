import {useEffect, useState} from 'react'
import HeroSection from "../components/Home/Hero";
import IssuesSection from "../components/Home/Issues";
import api from "../services/api";
import {Issue} from "../interfaces/issues.interface";

export default function Home() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchAllIssues = async () => {
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

        fetchAllIssues().then((issues) => setIssues(issues));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection/>
            <IssuesSection
                issues={issues}
                page={currentPage}
                setPage={setCurrentPage}
            />
        </div>
    )
}

