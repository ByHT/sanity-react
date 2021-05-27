import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4edj4bzz',
  dataset: 'production',
  useCdn: true,
});
