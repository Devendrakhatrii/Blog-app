import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bookmark, CircleMinus, Ellipsis } from "lucide-react";

const Post = () => {
  const userName = "Luish Dahal";
  const publishedDate = "May 19, 2024";
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex  items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>{userName}</span>
            <span className="">:</span>
            <span className="text-muted-foreground">{publishedDate}</span>
          </CardTitle>
          <CardDescription className="font-bold text-lg text-foreground">
            Why Japanese Websites Look So Different
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <p className="">
            & how to analyze design choices without jumping to conclusions Over
            the years, I have had many encounters with Japanese websites — be it
            researching visa requirements, planning trips, or simply ordering...
          </p>
          <img
            src="https://miro.medium.com/v2/resize:fill:140:140/1*D-TiKrBADjkMrnHjBAQ4bQ.png"
            alt=""
          />
        </CardContent>
        <CardFooter className="flex items-center  justify-between">
          <div className="flex items-center gap-2 ">
            <Badge
              variant="outline"
              className="rounded-full py-1 px-2  cursor-pointer"
            >
              Web Design
            </Badge>
            <p className="font-light text-sm">1 min read .</p>
            <p className="font-light text-sm">Selected for you</p>
          </div>
          <div className="flex items-center px-4  gap-3 w-1/2  text-muted-foreground cursor-pointer">
            <Bookmark className="hover:text-foreground h-5" />
            <CircleMinus className="hover:text-foreground h-5" />
            <Ellipsis className="hover:text-foreground h-5" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Post;
