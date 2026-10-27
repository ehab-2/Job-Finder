type Props = {
  params: Promise<{ id: string }>;
};

async function JobDetailsPage({ params }: Props) {
  const { id } = await params;


  return (
    <div>
        ssss
    </div>
  );
}

export default JobDetailsPage;
