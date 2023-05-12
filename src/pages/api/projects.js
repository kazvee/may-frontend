export default function handler(req, res) {
  res.status(200).json([
    {
      _id: 1,
      name: 'Project 1',
      description: 'Project 1 is my first project.',
      imageUrl: 'https://placedog.net/280?random=1',
      tools: ['JS', 'React'],
    },
    {
      _id: 2,
      name: 'Project 2',
      description: 'Project 2 is my second project.',
      imageUrl: 'https://placedog.net/280?random=2',
      tools: ['Typescript', 'Next'],
    },
  ]);
}
