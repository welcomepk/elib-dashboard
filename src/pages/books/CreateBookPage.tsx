import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreateBookPage() {
  const isLoding = false;
  return (
    <div>
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="hover:text-primary" to="/dashboard">
                Dashboard
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link className="hover:text-primary" to="/dashboard/books">
                Books
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-2">
          <Button variant={"outline"}>Cancel</Button>
          <Button size={"sm"} className="gap-1.5">
            {isLoding && <LoaderCircle className="animate-spin h-4 w-4" />}
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Submit
            </span>
          </Button>
        </div>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Create a new book</CardTitle>
          <CardDescription>
            Fill out the form below to create a new book.
          </CardDescription>
        </CardHeader>
        <CardContent className=" w-full max-w-[600px]">
          <form className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Book Name</Label>
              <Input
                id="name"
                type="text"
                className="w-full"
                placeholder="Harry Potter"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="genre">Genre</Label>
              <Input
                id="genre"
                type="text"
                className="w-full"
                placeholder="Fiction"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                className="min-h-32"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="coverImage">Cover Image</Label>
              <Input id="coverImage" type="file" className="w-full" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pdfFile">Book Pdf</Label>
              <Input id="pdfFile" type="file" className="w-full" />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
