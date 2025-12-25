import { auth } from '@clerk/nextjs/server';
import { Country, Language } from '@workspace/types';

const Test = async ({ params }: { params: Promise<{ country: Country; lang: Language }> }) => {
  const { country } = await params;

  try {
    const { userId, getToken } = await auth();
    if (!userId) {
      return <div>Not authenticated</div>;
    }

    const token = await getToken();

    const baseURL = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

    const res = await fetch(`${baseURL}/test?country=${country}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }
  } catch (err) {
    console.error('Error in Test page:', err);
    return <div>Something went wrong</div>;
  }
};

export default Test;
