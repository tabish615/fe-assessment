import axios from "axios"
import { useEffect, useState } from "react"
import { Article } from "./Articles.interfaces"
import { ArticleCard } from "../../components/ArticleCard"
import { SkeletonLoader } from "../../components/SkeletonLoader"
import Alert from "../../components/Alert"

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false)
  const [error, setError] = useState<string>('')


  const fetchArticle = async () => {
    setIsLoader(true);
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}`)
      setIsLoader(false);
      setArticles(response.data.results)
    } catch (error: any) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])
  return (
    <div className="flex flex-col items-center w-full">
      {error && <Alert message={error} type="error" onClose={() => setError('')} />}
      <h3 className="mb-4 text-2xl text-center py-4 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
        <span data-testid="article-title-id" className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">NY Times Most Popular Articles</span> </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 w-full">
        {!isLoader ? articles.length > 0 && articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))
          : Array.from({ length: 20 }, (_, index) => (
            <SkeletonLoader key={index} />
          ))
        }
      </div>
    </div>
  )
}