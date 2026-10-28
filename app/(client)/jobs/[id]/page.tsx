import JobApplyForm from "@/components/jobs/JobApplyForm";
import JobDescription from "@/components/jobs/JobDescription";
import JobNotFound from "@/components/jobs/JobNotFound";
import { JobsData } from "@/data";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  const job = JobsData.find((job) => job.id === id);

  if (!job) {
    return <JobNotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Link
        href="/jobs"
        className="font-mono text-sm text-muted-foreground hover:text-accent transition-none"
      >
        ← ALL POSITIONS
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-6">
        <JobDescription job={job} />
        <JobApplyForm />
      </div>
    </div>
  );
}

export default JobDetailsPage;
