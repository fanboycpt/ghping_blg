import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface ArticleCardProps {
  title: string;
  date: string;
  location: string;
  stadium: string;
  league: string;
  result: string;
  image: string;
  excerpt: string;
}

export default function ArticleCard({
  title,
  date,
  location,
  stadium,
  league,
  result,
  image,
  excerpt,
}: ArticleCardProps) {
  return (
    <Card className="scan-hover neon-glow-hover overflow-hidden border-2" data-testid={`card-article-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover chromatic-hover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-heading text-[8px] bg-chart-2 text-white border-chart-2">
            {league}
          </Badge>
        </div>
      </div>

      <CardHeader className="space-y-2 pb-3">
        <h3 className="font-heading text-xs leading-relaxed text-foreground line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 text-[10px] font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="font-mono text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-3">
        <span className="font-mono text-[10px] text-muted-foreground">{stadium}</span>
        <Badge variant="outline" className="font-heading text-[8px] text-chart-1 border-chart-1">
          {result}
        </Badge>
      </CardFooter>
    </Card>
  );
}
