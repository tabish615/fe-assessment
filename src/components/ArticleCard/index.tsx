import { Article } from "../../view/Articles/Articles.interfaces";

interface ArticleProps {
    article: Article;
}
export const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
    const thumbnailUrl = article.media[0]?.['media-metadata'].find(metadata => metadata.format === 'Standard Thumbnail')?.url;
    return (
        <div className="max-w-52 rounded overflow-hidden shadow-lg p-4">
            <div className="min-h-48">
                {thumbnailUrl ? (
                    <img data-testid="article-img" src={thumbnailUrl} alt={article.title} className="w-full h-auto" style={{ minWidth: 75, minHeight: 75 }} />
                ) : <svg className="w-full h-auto  max-h-40 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
                }
            </div>
            <div className="py-4 min-h-44">
                <div data-testid="article-title" className="font-bold text-xl mb-2 line-clamp-2">{article.title}</div>
                <p data-testid="article-abstract" className="text-gray-700 text-base line-clamp-3">{article.abstract}</p>
            </div>
            <div className="flex justify-center py-4">
                <span data-testid="article-publish-date" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Published: {article.published_date}</span>
            </div>
        </div>
    );
};