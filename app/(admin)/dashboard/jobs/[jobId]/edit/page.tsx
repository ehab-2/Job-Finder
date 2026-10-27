type Props = {
  params: Promise<{ jobId: string }>;
};

async function EditJobPage({ params }: Props) {
  const { jobId } = await params;
  

  return (
    <>
      <h1>sdfa</h1>
    </>
  );
}

export default EditJobPage;
