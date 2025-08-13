import reviewsData from '../../data/reviews.json';

export function GET() {
  return new Response(JSON.stringify(reviewsData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
