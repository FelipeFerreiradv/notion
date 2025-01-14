import { Button } from "@/app/components/ui/button";

interface GetNotionFreeButtonProps {
  full?: string;
  small?: string;
}

const GetNotionFreeButton = ({ full, small }: GetNotionFreeButtonProps) => {
  return (
    <>
      <Button className={full || small}>Get Notion free</Button>
    </>
  );
};

export default GetNotionFreeButton;
