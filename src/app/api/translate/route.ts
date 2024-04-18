import axios from 'axios';

export async function POST(request: Request) {
  const { text } = await request.json();
  try {
    const response = await axios.post('https://api.translate.tomyo.mn/predict', {
      text: text,
    });
    return Response.json({ message: response.data });
  } catch (error) {
    return Response.json({ message: 'Translation failed', error });
  }
}