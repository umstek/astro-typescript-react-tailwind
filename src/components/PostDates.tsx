import DateTime from "./DateTime";

const PostDates = ({
  initialDraftAt,
  publishedAt,
  updatedAt,
}: {
  initialDraftAt?: string;
  publishedAt?: string;
  updatedAt?: string;
}) => {
  return (
    <div className="flex flex-row space-x-4">
      {initialDraftAt && (
        <div title="Initial draft at">
          ✨ <DateTime date={initialDraftAt} />
        </div>
      )}
      {publishedAt && (
        <div title="Published at">
          📅 <DateTime date={publishedAt} />
        </div>
      )}
      {updatedAt && (
        <div title="Last updated at">
          🔃 <DateTime date={updatedAt} />
        </div>
      )}
    </div>
  );
};

export default PostDates;
