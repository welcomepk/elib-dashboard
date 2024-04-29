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
import { AxiosError, AxiosResponse } from "axios";
import { useTokenStore } from "@/store";

interface LoginFormData {
    email: string;
    password: string;
}
interface LoginErrorResponse extends AxiosError { }

export default function LoginForm() {
    const setToken = useTokenStore((state) => state.setToken);

    const [data, setData] = useState<LoginFormData>({
        email: "",
        password: "",
    });

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data: AxiosResponse) => {
            console.log(data);
            setToken(data.data.accessToken);
            navigate("/dashboard", { replace: true });
        },
        onError: (error: AxiosError<LoginErrorResponse>) => {
            console.log(error);
        },
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data.email || !data.password)
            return alert("email and password required!");
        mutation.mutate(data);
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="pb-1">
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account. <br />
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
                <form className="grid gap-4" onSubmit={handleLogin}>
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
                            autoComplete="new-password"
                            required
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
                        Sign in
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="grid gap-1">
                <div className=" text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/auth/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
