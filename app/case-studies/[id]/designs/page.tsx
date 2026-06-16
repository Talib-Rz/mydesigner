import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/data';
import DesignsGallery from '@/components/DesignsGallery';

type Props = {
  params: { id: string };
};

const ALLOWED_EXT = ['.png', '.jpg', '.jpeg', '.mp4', '.webm', '.gif', '.pdf'];

export default async function DesignsPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const study = caseStudies.find((s) => s.id === id);

  if (!study) return notFound();

  const folderRel = study.assetsFolder ?? '';
  const folderPath = path.join(process.cwd(), 'public', folderRel.replace(/^\//, ''));

  let files: string[] = [];
  try {
    const items = await fs.readdir(folderPath);
    files = items.filter((f) => ALLOWED_EXT.includes(path.extname(f).toLowerCase()));
  } catch (e) {
    files = [];
  }

  return (
    <div className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{study.title} - Designs</h1>
            <p className="text-gray-600 mt-2">Some of the design assets for this case study.</p>
          </div>
          <div>
            <Link
              href={`/case-studies#study-${study.id}`}
              className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm"
            >
              ← Back
            </Link>
          </div>
        </div>

        {files.length === 0 ? (
          <div className="text-center text-gray-600 py-20">No design assets found for this case study.</div>
        ) : (
          <DesignsGallery files={files.map((f) => f)} folderRel={folderRel} />
        )}
      </div>
    </div>
  );
}
