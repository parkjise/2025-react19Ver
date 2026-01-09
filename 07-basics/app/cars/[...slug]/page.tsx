interface CarsPageProps {
  params: Promise<{
    name: string;
    id: string;
  }>;
}

export default async function CarPages({ params }: CarsPageProps) {
  const slug = await params;
  console.log(slug);
  return <div>CarPages</div>;
}
