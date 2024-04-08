import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostByTitle } from "../../services/plantsAPI";

export function usePost() {
  const { name } = useParams();

  const post_search = name.replaceAll("-", " ");

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", post_search],
    queryFn: () => getPostByTitle(post_search),
    retry: false,
  });

  return {
    post,
    isLoading,
    error,
  };
}
