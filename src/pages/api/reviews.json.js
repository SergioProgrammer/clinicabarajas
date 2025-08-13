// src/pages/api/reviews.json.js
export async function GET() {
  const apiKey = import.meta.env.GOOGLE_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({ reviews: [], error: "Falta API_KEY o PLACE_ID" }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );

    if (!res.ok) {
      throw new Error(`Google API error: ${res.status}`);
    }

    const data = await res.json();

    // Mapear solo los campos que necesitamos
    const reviews = (data.result?.reviews || []).map(r => ({
      author_name: r.author_name,
      profile_photo_url: r.profile_photo_url,
      rating: r.rating,
      relative_time_description: r.relative_time_description,
      text: r.text,
    }));

    return new Response(JSON.stringify({ reviews }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ reviews: [], error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
