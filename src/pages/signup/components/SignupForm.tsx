import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { register } from "@/http/api";
import { AxiosError } from "axios";
import { LoaderCircle } from "lucide-react";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}
interface SignupErrorResponse extends AxiosError {}

export default function SignupForm() {
  const [data, setData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      console.log(response);
      navigate("/dashboard");
    },
    onError: (error: AxiosError<SignupErrorResponse>) => {
      console.log(error.response?.data.message);
    },
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.email || !data.password)
      return alert("email and password required!");
    mutation.mutate(data);
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {
          <span className="text-sm h-6 text-red-500 font-semibold block mb-2">
            {mutation.isError
              ? mutation.error.response?.data?.message || mutation.error.message
              : " "}
          </span>
        }
        <form onSubmit={handleSignup} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              onChange={handleChange}
              name="name"
              id="first-name"
              placeholder="Max"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              id="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending && (
              <LoaderCircle size={20} className="mr-2 animate-spin" />
            )}{" "}
            Create an account
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
