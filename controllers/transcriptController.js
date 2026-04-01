import axios from 'axios';

export const getTranscript = async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get('https://api.supadata.ai/v1/transcript', {
      params: { url, text: true, lang: 'en' },
      headers: { 'x-api-key': process.env.SUPADATA_API_KEY }
    });

    res.json({
  transcript: response.data.content
});

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transcript' });
  }
};