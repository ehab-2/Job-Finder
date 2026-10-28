type Props = {
  title: string;
  subtitle: string;
};

function PageHeader({ title, subtitle }: Props) {
  return (
    <div>
      <h1 className="text-4xl font-heading font-bold">{title}</h1>
      <p className="font-mono text-sm text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}

export { PageHeader };
