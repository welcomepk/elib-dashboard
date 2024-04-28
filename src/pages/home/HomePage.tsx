import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/http/api";
import { Book } from "@/types";

export default function HomePage() {
  // Queries
  const query = useQuery<Book[], Error>({
    queryKey: ["todos"],
    queryFn: getBooks,
  });

  return (
    <div>
      Home page
      <br />
      {query.isLoading
        ? "Loding users..."
        : Array.isArray(query.data)
        ? query.data.map((book: Book) => {
            return <li key={book._id}>{book.title}</li>;
          })
        : "No users found"}
      <ul></ul>
    </div>
  );
}
