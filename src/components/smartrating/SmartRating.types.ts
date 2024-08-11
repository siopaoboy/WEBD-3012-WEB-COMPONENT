export interface SmartRatingProps {
    testIdPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
  }

  const SmartRating: React.FC<SmartRatingProps> = (props) => {}