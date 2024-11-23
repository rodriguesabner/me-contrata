interface Labels {
    id: number;
    name: string;
}

interface Issue {
    number: number;
    title: string;
    created_at: string;
    html_url: string;
    body: string;
    user: {
        avatar_url: string;
    },
    labels: Labels[];
}

export type {
    Issue
};
