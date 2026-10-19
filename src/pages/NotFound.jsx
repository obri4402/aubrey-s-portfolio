import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-4 px-4 bg-background text-foreground text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
      <p className="text-muted-foreground max-w-md">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="cosmic-button mt-2">
        Back to home
      </Link>
    </main>
  );
};
