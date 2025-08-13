export async function GET() {
  const apiKey = import.meta.env.GOOGLE_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    const data = await res.json();

    return new Response(JSON.stringify({ reviews: data.result?.reviews || [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ reviews: [], error: err.message }), { status: 500 });
  }
}
