import {
  Alert,
  AlertDescription,
  AlertTitle,
  ArrowDownIcon,
  Button,
  ExclamationTriangleIcon,
} from '@ui/index';

interface LoadMoreButtonProps {
  postCount: number;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
  totalPosts: number;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  postCount,
  setPostCount,
  totalPosts,
}) => {
  if (postCount >= totalPosts) {
    return (
      <div className="mx-auto mt-6 flex max-w-md items-center justify-center lg:mt-12">
        <Alert>
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Uh oh!</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            That&apos;s all the articles we have for now.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="mt-6 flex items-center justify-center">
      <Button
        variant="ghost"
        size="lg"
        onClick={() => setPostCount(postCount + 9)}
      >
        <ArrowDownIcon className="mr-2 h-4 w-4" />
        Load more articles
      </Button>
    </div>
  );
};

export default LoadMoreButton;
