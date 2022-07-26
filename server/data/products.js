import reviews from './reviews.js';

const products = [
  {
    title: 'Strappy Sandals',
    categories: ['men', 'sandals'],
    images: [
      '/images/shoes/men/Sandal-1/1.jpeg',
      '/images/shoes/men/Sandal-1/2.jpeg',
    ],
    description:
      'Sandals with padded ankle and foot straps in woven fabric that have a hook and loop fastening. Moulded insoles and outer soles that are fluted underneath. Height of soles 3.2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 12,
  },

  {
    title: 'Beige Sandals',
    categories: ['men', 'sandals'],
    images: [
      '/images/shoes/men/Sandal-2/1.jpeg',
      '/images/shoes/men/Sandal-2/2.jpeg',
    ],
    description:
      'Sandals with padded ankle and foot straps in woven fabric. Ankle strap with a fastener and foot straps with a hook and loop fastening. Moulded insoles and outer soles that are fluted underneath. Height of soles 3.2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 10,
  },
  {
    title: 'Mule Loafers',
    categories: ['men', 'loafers'],
    images: [
      '/images/shoes/men/Loafer-1/1.jpeg',
      '/images/shoes/men/Loafer-1/2.jpeg',
    ],
    description:
      'Mule loafers in soft imitation suede with welt seams at the front. Canvas linings, imitation leather insoles and rubber soles that are fluted underneath. Heel 1.2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 25,
  },
  {
    title: 'Tasselled Leather Loafers',
    categories: ['men', 'loafers'],
    images: [
      '/images/shoes/men/Loafer-2/1.jpeg',
      '/images/shoes/men/Loafer-2/2.jpeg',
    ],
    description:
      'Leather loafers with tassels, a moccasin seam at the front and soft backs that can be folded down. Leather linings and insoles and smooth soles. Heel 1.4 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 50,
  },
  {
    title: 'Slip-On Trainers',
    categories: ['men', 'trainers'],
    images: [
      '/images/shoes/men/Trainer-1/1.jpeg',
      '/images/shoes/men/Trainer-1/2.jpeg',
    ],
    description:
      'Trainers in woven fabric with a top section in mesh, elastic gores in the sides and a loop at the back. Cork insoles and rubber soles that are patterned underneath. Height of soles 2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 18,
  },

  {
    title: 'Grey Trainers',
    categories: ['men', 'trainers'],
    images: [
      '/images/shoes/men/Trainer-2/1.jpeg',
      '/images/shoes/men/Trainer-2/2.jpeg',
    ],
    description:
      'Retro-inspired trainers in imitation leather with imitation suede details. Tongue and lacing at the front and a padded top edge. Jersey linings and insoles and patterned soles. Height of soles 3.2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 30,
  },

  {
    title: 'Suede Chelsea Boots',
    categories: ['men', 'boots'],
    images: [
      '/images/shoes/men/Boot-1/1.jpeg',
      '/images/shoes/men/Boot-1/2.jpeg',
    ],
    description:
      'Beige chelsea boots in suede with trainer soles, elastic gores in the sides and a loop at the back. Leather linings and insoles and textured soles that are patterned underneath. Height of soles 3.8 cm.',
    reviews,
    rating: 4,
    ratedSize: 4,
    reviewCount: 3,
    sizes: {
      6: 9,
      7: 0,
      8: 100,
      9: 200,
      9.5: 300,
      10: 250,
      11: 110,
      12: 10,
    },
    price: 70,
  },

  {
    title: 'Suede Chelsea Boots',
    categories: ['men', 'boots'],
    images: [
      '/images/shoes/men/Boot-2/1.jpeg',
      '/images/shoes/men/Boot-2/2.jpeg',
    ],
    description:
      'Black chelsea boots in suede with trainer soles, elastic gores in the sides and a loop at the back. Leather linings and insoles and textured soles that are patterned underneath. Height of soles 3.8 cm.',
    reviews,
    rating: 4,
    ratedSize: 4,
    reviewCount: 3,
    sizes: {
      6: 9,
      7: 1,
      8: 100,
      9: 200,
      9.5: 300,
      10: 250,
      11: 110,
      12: 10,
    },
    price: 70,
  },

  {
    title: 'Flip Flops',
    categories: ['women', 'sandals'],
    images: [
      '/images/shoes/women/Sandal-2/1.jpeg',
      '/images/shoes/women/Sandal-2/2.jpeg',
    ],
    description:
      'Plastic flip-flops with square toes and heels. Height of soles 0.5 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 9,
  },

  {
    title: 'Chunky Mules',
    categories: ['women', 'sandals'],
    images: [
      '/images/shoes/women/Sandal-1/1.jpeg',
      '/images/shoes/women/Sandal-1/2.jpeg',
    ],
    description:
      'Beige chunky-soled mules in imitation leather. Adjustable foot straps with metal buckles. Heel 6 cm',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 20,
  },

  {
    title: 'High Heeled Sandals',
    categories: ['women', 'sandals', 'heels'],
    images: [
      '/images/shoes/women/Heels-1/1.jpeg',
      '/images/shoes/women/Heels-1/2.jpeg',
    ],
    description:
      'High Heeled Sandals in imitation leather with square toes and heels. Open toes with narrow straps that cross over the foot and tie around the ankle. Heel 10 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 15,
  },

  {
    title: 'Chain-Detail Leather Loafers',
    categories: ['women', 'loafers'],
    images: [
      '/images/shoes/women/Loafer-1/1.jpeg',
      '/images/shoes/women/Loafer-1/2.jpeg',
    ],
    description:
      'Loafers in leather with a decorative metal chain at the front. Satin linings, leather insoles and chunky soles that are patterned underneath. Heel 4.2 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 60,
  },
  {
    title: 'Chunky Leather Loafers',
    categories: ['women', 'loafers'],
    images: [
      '/images/shoes/women/Loafer-2/1.jpeg',
      '/images/shoes/women/Loafer-2/2.jpeg',
    ],
    description:
      'Leather loafers with a decorative tab at the front. Canvas linings, leather insoles and chunky soles that are fluted underneath. Heel 5.5 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 60,
  },
  {
    title: 'Grey Trainers',
    categories: ['women', 'trainers'],
    images: [
      '/images/shoes/women/Trainer-1/1.jpeg',
      '/images/shoes/women/Trainer-1/2.jpeg',
    ],
    description:
      'Trainers in mesh and imitation suede, and lacing at the front. Mesh linings and insoles and fluted soles. Height of soles 5 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 25,
  },
  {
    title: 'Chunky Trainers',
    categories: ['women', 'trainers'],
    images: [
      '/images/shoes/women/Trainer-2/1.jpeg',
      '/images/shoes/women/Trainer-2/2.jpeg',
    ],
    description:
      'Trainers in mesh and imitation leather with reflective sections. Padded edge and tongue, lacing at the front and a loop at the back. Mesh linings and insoles and patterned soles. Height of soles 6 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 35,
  },
  {
    title: 'Heeled Leather Boots',
    categories: ['women', 'boots', 'heels'],
    images: [
      '/images/shoes/women/Boot-1/1.jpeg',
      '/images/shoes/women/Boot-1/2.jpeg',
    ],
    description:
      'Ankle boots in leather with rounded toes, elastic gores in the sides and a loop front and back. Cotton twill linings, leather insoles and covered block heels. Heel 6.5 cm.',
    reviews,
    rating: 4,
    ratedSize: 7,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 80,
  },
  {
    title: 'White Ankle Boots',
    categories: ['women', 'boots'],
    images: [
      '/images/shoes/women/Boot-2/1.jpeg',
      '/images/shoes/women/Boot-2/2.jpeg',
    ],
    description:
      'Boots with an ankle-height shaft, lacing at the front and a loop at the back. Satin linings and patterned soles. Heel 3.5 cm.',
    reviews,
    rating: 4,
    ratedSize: 7,
    reviewCount: 3,
    sizes: {
      2: 9,
      3: 700,
      4: 100,
      5: 200,
      6: 300,
      7: 250,
      8: 110,
      9: 4,
    },
    price: 19,
  },

  {
    title: 'Trainers',
    categories: ['boys', 'trainers'],
    images: [
      '/images/shoes/boys/Trainer-1/1.jpeg',
      '/images/shoes/boys/Trainer-1/2.jpeg',
    ],
    description:
      'Trainers in imitation leather with a padded tongue and tabs with hook and loop fastenings at the front, and a loop at the back. Mesh linings and insoles and chunky soles that are patterned underneath. Height of soles 1.5 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      7: 9,
      8: 0,
      9: 100,
      10: 200,
      11: 300,
      12: 250,
      13: 110,
      1: 4,
      2: 5,
    },
    price: 15,
  },

  {
    title: 'Printed Wellingtons',
    categories: ['boys', 'girls', 'boots'],
    images: [
      '/images/shoes/boys/Boot-1/1.jpeg',
      '/images/shoes/boys/Boot-1/2.jpeg',
    ],
    description:
      'Printed wellingtons for waterproof outdoor play with a loop at the back to make them easier to get on and off, and chunky soles that are patterned underneath for a good grip. Fleece linings. Height of soles 2.6 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      7: 9,
      8: 2,
      9: 100,
      10: 200,
      11: 300,
      12: 250,
      13: 110,
      1: 4,
      2: 5,
    },
    price: 16,
  },

  {
    title: 'Motif-Detail Sandals',
    categories: ['boys', 'sandals'],
    images: [
      '/images/shoes/boys/Sandal-1/1.jpeg',
      '/images/shoes/boys/Sandal-1/2.jpeg',
    ],
    description:
      'Sandals with adjustable hook and loop tabs at the top and a loop at the back. Moulded insoles and patterned soles.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      7: 9,
      8: 2,
      9: 100,
      10: 200,
      11: 300,
      12: 250,
      13: 110,
      1: 4,
      2: 5,
    },
    price: 14,
  },

  {
    title: 'Canvas Trainers',
    categories: ['girls', 'trainers'],
    images: [
      '/images/shoes/girls/Trainer-1/1.jpeg',
      '/images/shoes/girls/Trainer-1/2.jpeg',
    ],
    description:
      'Low profile trainers in cotton canvas with lacing at the front and a loop at the back. Cotton canvas linings and insoles and fluted rubber soles.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      7: 9,
      8: 0,
      9: 100,
      10: 200,
      11: 300,
      12: 250,
      13: 110,
      1: 4,
      2: 5,
    },
    price: 15,
  },

  {
    title: 'Warm-Lined Boots',
    categories: ['girls', 'boots'],
    images: [
      '/images/shoes/girls/Boot-1/1.jpeg',
      '/images/shoes/girls/Boot-1/2.jpeg',
    ],
    description:
      'Warm-lined boots in imitation leather with lacing at the front, a zip in one side and a loop at the back. Soft pile linings and insoles. Height of soles 5 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      2: 2,
      3: 100,
      3.5: 200,
      4: 300,
      5: 250,
    },
    price: 16,
  },

  {
    title: 'Sandals',
    categories: ['girls', 'sandals'],
    images: [
      '/images/shoes/girls/Sandal-1/1.jpeg',
      '/images/shoes/girls/Sandal-1/2.jpeg',
    ],
    description:
      'Sandals in imitation leather with a foot and ankle strap with a hook and loop fastening. Moulded imitation suede insoles and fluted soles. Height of soles 2.3 cm.',
    reviews,
    rating: 4,
    ratedSize: 8,
    reviewCount: 3,
    sizes: {
      7: 9,
      8: 2,
      9: 100,
      10: 200,
      11: 300,
      12: 250,
      13: 110,
      1: 4,
      2: 5,
    },
    price: 14,
  },
];

export default products;
