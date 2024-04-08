import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Login into your new account",
      );
      navigate("/account", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error?.message);
    },
  });

  return { signup, isLoading };
}
