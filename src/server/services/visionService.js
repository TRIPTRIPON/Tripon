const axios = require('axios');
const { GoogleAuth } = require('google-auth-library');

exports.describeImage = async (base64Image) => {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/cloud-vision']
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  const response = await axios.post(
    'https://vision.googleapis.com/v1/images:annotate',
    {
      requests: [
        {
          image: { content: base64Image },
          features: [{ type: "LABEL_DETECTION", maxResults: 5 }],
        },
      ],
    },
    {
      headers: {
        'Authorization': `Bearer ${accessToken.token}`,
        'Content-Type': 'application/json',
      }
    }
  );

  const labels = response.data.responses[0].labelAnnotations;
  return labels.map(l => l.description).join(', ');
};