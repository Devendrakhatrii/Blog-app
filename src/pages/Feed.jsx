import { Link } from "react-router-dom";
import { BadgePlus } from "lucide-react";

const Feed = () => {
  return (
    <>
      <div className="bg-red-500 h-screen w-1/2 ml-60 mt-3">
        <nav className=" flex items-center h-10 m-4 p-4 border-b-2   flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <BadgePlus className="h-4 w-4" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            For You
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Following
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            AI
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Programming
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            MERN Stack
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Feed;