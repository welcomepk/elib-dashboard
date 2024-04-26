import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/http/api";
import { LoaderCircle } from "lucide-react";

interface LoginFormProps {
  handleLogin: (email: string, password: string) => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [data, setData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard");
    },
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!data.email || !data.password) return;
    mutation.mutate(data);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account. <br />
          {mutation.isError && (
            <span className="text-sm text-red-500">
              {mutation.error.message}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>

          <Input
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
            required
          />
        </div>
      </CardContent>
      <CardFooter className="grid gap-1">
        <Button
          className="w-full"
          onClick={handleLogin}
          disabled={mutation.isPending}
        >
          {mutation.isPending && (
            <LoaderCircle size={20} className="mr-2 animate-spin" />
          )}{" "}
          Sign in
        </Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
