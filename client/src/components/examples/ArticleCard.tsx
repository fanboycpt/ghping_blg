import ArticleCard from '../ArticleCard';
import stadiumImage from '@assets/generated_images/Regional_football_match_action_276cc275.png';

export default function ArticleCardExample() {
  return (
    <div className="p-4 max-w-sm bg-background">
      <ArticleCard
        title="Regionalliga West: Spannende 90 Minuten"
        date="15.10.2024"
        location="Gelsenkirchen"
        stadium="Glückauf Kampfbahn"
        league="Regionalliga"
        result="2:1"
        image={stadiumImage}
        excerpt="Ein elektrischer Abend auf der Glückauf Kampfbahn. Die Atmosphäre war geprägt von echtem Fußball-Spirit und leidenschaftlichen Fans."
      />
    </div>
  );
}
