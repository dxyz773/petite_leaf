import { useQuery } from "@tanstack/react-query";
import { getAllBlogPosts } from "../../services/plantsAPI";

export function useBlog() {
  const {
    data: blogPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: getAllBlogPosts,
  });

  return { blogPosts, isLoading, error };
}
