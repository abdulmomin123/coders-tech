import { FullProduct } from './Types';

const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, voluptas
velit iste eligendi nulla amet porro nam quibusdam ullam earum enim
consectetur optio quis, corrupti reiciendis repellendus asperiores autem
incidunt, dicta quaerat perspiciatis exercitationem! Deserunt magni ut
sed, facilis dolor reiciendis delectus explicabo ipsum eaque magnam, odit
debitis expedita quia nostrum beatae assumenda totam! Doloremque nostrum
consectetur ipsum natus tempore deserunt eveniet? Eligendi, earum. Optio
quidem repellat, laudantium ab explicabo sed? Laboriosam ratione
laudantium veritatis dicta architecto officiis perferendis! Itaque
corporis odit, impedit doloribus numquam porro saepe sed dolorem. Quam
sint ullam, ducimus vitae autem consectetur laborum. Voluptates, sint sed!
`;

const images = [
  '/test-prod-img.webp',
  '/test-prod-img-2.webp',
  '/test-prod-img-3.webp',
  '/test-prod-img-4.webp',
];

const lighting: FullProduct[] = [
  {
    id: 'p1',
    name: 'Wooden Teapot Via Jar',
    category: 'lighting',
    image: '/p1.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p1-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p2',
    name: 'Buckle Wrap Wooden Table',
    category: 'lighting',
    image: '/p2.jpg',
    price: 52,
    thumbnail: '/p2-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p3',
    name: 'Wooden Bluetooth Speaker',
    category: 'lighting',
    image: '/p3.jpg',
    price: 36,
    thumbnail: '/p3-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p4',
    name: 'Wooden Coffee Mug',
    category: 'lighting',
    image: '/p4.jpg',
    price: 23,
    thumbnail: '/p4-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p5',
    name: 'Wooden White Chair',
    category: 'lighting',
    image: '/p5.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p5-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p6',
    name: 'Black Wooden Wardrobe',
    category: 'lighting',
    image: '/p6.jpg',
    price: 52,
    thumbnail: '/p6-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p7',
    name: 'Black Chair Wooden Craft',
    category: 'lighting',
    image: '/p7.jpg',
    price: 36,
    thumbnail: '/p7-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p8',
    name: 'Wall Decorator for Plant',
    category: 'lighting',
    image: '/p8.jpg',
    price: 23,
    thumbnail: '/p8-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
];

const sofa: FullProduct[] = [
  {
    id: 'p9',
    name: 'Wooden Teapot Via Jar',
    category: 'sofa',
    image: '/p1.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p1-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p10',
    name: 'Buckle Wrap Wooden Table',
    category: 'sofa',
    image: '/p2.jpg',
    price: 52,
    thumbnail: '/p2-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p11',
    name: 'Wooden Bluetooth Speaker',
    category: 'sofa',
    image: '/p3.jpg',
    price: 36,
    thumbnail: '/p3-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p12',
    name: 'Wooden Coffee Mug',
    category: 'sofa',
    image: '/p4.jpg',
    price: 23,
    thumbnail: '/p4-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p13',
    name: 'Wooden White Chair',
    category: 'sofa',
    image: '/p5.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p5-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p14',
    name: 'Black Wooden Wardrobe',
    category: 'sofa',
    image: '/p6.jpg',
    price: 52,
    thumbnail: '/p6-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p15',
    name: 'Black Chair Wooden Craft',
    category: 'sofa',
    image: '/p7.jpg',
    price: 36,
    thumbnail: '/p7-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p16',
    name: 'Wall Decorator for Plant',
    category: 'sofa',
    image: '/p8.jpg',
    price: 23,
    thumbnail: '/p8-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
];

const loungeChair: FullProduct[] = [
  {
    id: 'p17',
    name: 'Wooden Teapot Via Jar',
    category: 'loungeChair',
    image: '/p1.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p1-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p18',
    name: 'Buckle Wrap Wooden Table',
    category: 'loungeChair',
    image: '/p2.jpg',
    price: 52,
    thumbnail: '/p2-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p19',
    name: 'Wooden Bluetooth Speaker',
    category: 'loungeChair',
    image: '/p3.jpg',
    price: 36,
    thumbnail: '/p3-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p20',
    name: 'Wooden Coffee Mug',
    category: 'loungeChair',
    image: '/p4.jpg',
    price: 23,
    thumbnail: '/p4-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p21',
    name: 'Wooden White Chair',
    category: 'loungeChair',
    image: '/p5.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p5-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p22',
    name: 'Black Wooden Wardrobe',
    category: 'loungeChair',
    image: '/p6.jpg',
    price: 52,
    thumbnail: '/p6-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p23',
    name: 'Black Chair Wooden Craft',
    category: 'loungeChair',
    image: '/p7.jpg',
    price: 36,
    thumbnail: '/p7-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p24',
    name: 'Wall Decorator for Plant',
    category: 'loungeChair',
    image: '/p8.jpg',
    price: 23,
    thumbnail: '/p8-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
];

const furniture: FullProduct[] = [
  {
    id: 'p25',
    name: 'Wooden Teapot Via Jar',
    category: 'furniture',
    image: '/p1.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p1-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p26',
    name: 'Buckle Wrap Wooden Table',
    category: 'furniture',
    image: '/p2.jpg',
    price: 52,
    thumbnail: '/p2-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p27',
    name: 'Wooden Bluetooth Speaker',
    category: 'furniture',
    image: '/p3.jpg',
    price: 36,
    thumbnail: '/p3-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p28',
    name: 'Wooden Coffee Mug',
    category: 'furniture',
    image: '/p4.jpg',
    price: 23,
    thumbnail: '/p4-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p29',
    name: 'Wooden White Chair',
    category: 'furniture',
    image: '/p5.jpg',
    price: 45,
    oldPrice: 65,
    thumbnail: '/p5-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p30',
    name: 'Black Wooden Wardrobe',
    category: 'furniture',
    image: '/p6.jpg',
    price: 52,
    thumbnail: '/p6-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p31',
    name: 'Black Chair Wooden Craft',
    category: 'furniture',
    image: '/p7.jpg',
    price: 36,
    thumbnail: '/p7-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
  {
    id: 'p32',
    name: 'Wall Decorator for Plant',
    category: 'furniture',
    image: '/p8.jpg',
    price: 23,
    thumbnail: '/p8-thumb.jpg',
    createdAt: new Date().toISOString(),
    images,
    description,
    reviews: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        rating: 4,
        feedback: "This product is really great and does it's job very well.",
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Thanks for your review.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
    questions: [
      {
        id: 'u1',
        name: 'Abdul Momin',
        image: '/test-user.svg',
        feedback: 'Is this product good enough?',
        date: new Date().toISOString(),
        replies: [
          {
            name: 'Shopnik',
            image: '/test-user.svg',
            feedback: 'Yes, this product is very good.',
            date: new Date().toISOString(),
          },
        ],
      },
    ],
  },
];

export const mockProducts = {
  lighting,
  sofa,
  loungeChair,
  furniture,
};

export const allProducts = [
  ...mockProducts['lighting'],
  ...mockProducts['sofa'],
  ...mockProducts['loungeChair'],
  ...mockProducts['furniture'],
];
