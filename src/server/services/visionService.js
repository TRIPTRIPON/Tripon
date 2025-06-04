require('dotenv').config();
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

exports.describeImage = async (base64Image) => {
  const [result] = await client.annotateImage({
    image: { content: base64Image },
    features: [{ type: 'LABEL_DETECTION', maxResults: 5 }],
  });

  const labels = result.labelAnnotations;
  return labels.map(label => label.description).join(', ');
};
