export default function Recipe({ params }: { params: { id: string } }) {
  return <main>Receipt page {params.id}</main>;
}
