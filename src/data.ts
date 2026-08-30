export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Samosa (2 pcs)',
        description: 'Crispy pastry filled with spiced potatoes and green peas. Served with tamarind chutney.',
        price: '₹60',
        image: 'https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese grilled in the tandoor with bell peppers and onions.',
        price: '₹220',
        image: 'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'chef'],
      },
      {
        name: 'Chicken 65',
        description: 'Deep-fried chicken bites tossed in a spicy, aromatic South Indian masala.',
        price: '₹240',
        image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['spicy'],
      },
      {
        name: 'Gobi Manchurian',
        description: 'Crispy cauliflower florets in a tangy Indo-Chinese garlic and soy sauce.',
        price: '₹180',
        image: 'https://images.pexels.com/photos/36388454/pexels-photo-36388454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'spicy'],
      },
    ],
  },
  {
    id: 'main-course',
    label: 'Main Course',
    items: [
      {
        name: 'Butter Chicken',
        description: 'Tandoori chicken simmered in a rich, creamy tomato gravy with a hint of fenugreek.',
        price: '₹320',
        image: 'https://images.pexels.com/photos/20408445/pexels-photo-20408445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['chef'],
      },
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a velvety tomato and cashew gravy with warming spices.',
        price: '₹260',
        image: 'https://images.pexels.com/photos/33643313/pexels-photo-33643313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Mutton Rogan Josh',
        description: 'Slow-cooked tender lamb in a Kashmiri-style aromatic red gravy.',
        price: '₹380',
        image: 'https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['spicy'],
      },
      {
        name: 'Dum Aloo',
        description: 'Baby potatoes stuffed with spiced paneer, simmered in a rich Mughlai gravy.',
        price: '₹240',
        image: 'https://images.pexels.com/photos/33643313/pexels-photo-33643313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
    ],
  },
  {
    id: 'south-indian',
    label: 'South Indian',
    items: [
      {
        name: 'Masala Dosa',
        description: 'Crispy rice and lentil crepe filled with spiced potato masala. Served with sambar and chutneys.',
        price: '₹120',
        image: 'https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'chef'],
      },
      {
        name: 'Idli Sambar (4 pcs)',
        description: 'Steamed rice and lentil cakes served with hot sambar and coconut chutney.',
        price: '₹80',
        image: 'https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Puri Bhaji',
        description: 'Fluffy deep-fried bread served with a spiced potato curry.',
        price: '₹100',
        image: 'https://images.pexels.com/photos/36388454/pexels-photo-36388454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Uttapam',
        description: 'Thick rice pancake topped with onions, tomatoes, and green chilies.',
        price: '₹110',
        image: 'https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'spicy'],
      },
    ],
  },
  {
    id: 'breads-rice',
    label: 'Breads & Rice',
    items: [
      {
        name: 'Garlic Naan',
        description: 'Soft tandoor-baked bread brushed with garlic butter and fresh coriander.',
        price: '₹50',
        image: 'https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Hyderabadi Biryani',
        description: 'Fragrant basmati rice layered with marinated meat, saffron, and herbs. Dum-cooked.',
        price: '₹290',
        image: 'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['chef'],
      },
      {
        name: 'Jeera Rice',
        description: 'Basmati rice tempered with cumin seeds and whole spices. Light and aromatic.',
        price: '₹140',
        image: 'https://images.pexels.com/photos/36388454/pexels-photo-36388454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Tandoori Roti',
        description: 'Whole wheat flatbread baked fresh in the clay tandoor oven.',
        price: '₹30',
        image: 'https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Beverages',
    items: [
      {
        name: 'Masala Chai',
        description: 'Traditional Indian tea brewed with milk, ginger, and aromatic spices.',
        price: '₹40',
        image: 'https://images.pexels.com/photos/29650995/pexels-photo-29650995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Filter Coffee',
        description: 'South Indian style frothy coffee served in a traditional steel tumbler.',
        price: '₹50',
        image: 'https://images.pexels.com/photos/12865880/pexels-photo-12865880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Sweet Lassi',
        description: 'Chilled yogurt drink blended with sugar and a touch of cardamom.',
        price: '₹70',
        image: 'https://images.pexels.com/photos/18413481/pexels-photo-18413481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Masala Buttermilk',
        description: 'Spiced buttermilk with curry leaves, ginger, and green chilies.',
        price: '₹50',
        image: 'https://images.pexels.com/photos/36662612/pexels-photo-36662612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'spicy'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Gulab Jamun (2 pcs)',
        description: 'Warm milk-solid dumplings soaked in fragrant rose and cardamom syrup.',
        price: '₹90',
        image: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg', 'chef'],
      },
      {
        name: 'Rasmalai (2 pcs)',
        description: 'Soft cottage cheese discs in saffron-infused milk, garnished with pistachios.',
        price: '₹110',
        image: 'https://images.pexels.com/photos/37294501/pexels-photo-37294501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Gajar Halwa',
        description: 'Slow-cooked carrot pudding with milk, ghee, and nuts. A winter favorite.',
        price: '₹100',
        image: 'https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
      {
        name: 'Ice Cream Sundae',
        description: 'Vanilla and kulfi ice cream topped with nuts, falooda, and rose syrup.',
        price: '₹130',
        image: 'https://images.pexels.com/photos/8887065/pexels-photo-8887065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['veg'],
      },
    ],
  },
];

export const galleryImages = [
  { url: 'https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Indian food spread', size: 'large' },
  { url: 'https://images.pexels.com/photos/12181619/pexels-photo-12181619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Restaurant interior', size: 'normal' },
  { url: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Lamb curry', size: 'normal' },
  { url: 'https://images.pexels.com/photos/13869884/pexels-photo-13869884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cozy dining area', size: 'tall' },
  { url: 'https://images.pexels.com/photos/20408445/pexels-photo-20408445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Indian curry', size: 'normal' },
  { url: 'https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Romantic dinner setting', size: 'normal' },
  { url: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gulab Jamun dessert', size: 'normal' },
];

export const heroImage = 'https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const aboutImages = [
  'https://images.pexels.com/photos/13869884/pexels-photo-13869884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const chefImage = 'https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const offerImage = 'https://images.pexels.com/photos/8775160/pexels-photo-8775160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export interface Stat {
  number: string;
  label: string;
}

export const stats: Stat[] = [
  { number: '25+', label: 'Years of Tradition' },
  { number: '120+', label: 'Dishes on the Menu' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '4.6', label: 'Average Rating' },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Regular Diner',
    text: 'The butter chicken here is the best I have had in years. It tastes just like my grandmother used to make. The portions are generous and the staff treats you like family.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Food Blogger',
    text: 'I have visited countless Indian restaurants across Tamil Nadu, and Maharaja\'s stands out for its consistency and authenticity. The biryani is absolutely phenomenal.',
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Anjali Iyer',
    role: 'Local Resident',
    text: 'We have been coming here every weekend for the last five years. The masala dosa and filter coffee never disappoint. It feels like a second home.',
    rating: 5,
    initial: 'A',
  },
];

export interface SpecialOffer {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  badge: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    title: 'Weekend Family Feast',
    description: 'A complete thali for four: two main courses, four breads, rice, dessert, and beverages. Perfect for sharing.',
    price: '₹899',
    originalPrice: '₹1,400',
    badge: 'Save 35%',
  },
  {
    title: 'Lunch Express Combo',
    description: 'Any one main course with jeera rice, naan, and a dessert. Served Monday to Friday, 12 PM to 3 PM.',
    price: '₹249',
    originalPrice: '₹400',
    badge: 'Weekdays Only',
  },
  {
    title: 'South Indian Platter',
    description: 'Two dosas, four idlis, vada, sambar, three chutneys, and filter coffee for two. A regional classic.',
    price: '₹399',
    originalPrice: '₹600',
    badge: 'Most Popular',
  },
];

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: 'leaf',
    title: 'Farm Fresh Ingredients',
    description: 'We source produce daily from local farms and markets. Nothing is frozen, nothing is pre-made.',
  },
  {
    icon: 'flame',
    title: 'Authentic Spices',
    description: 'Our masalas are roasted and ground in-house using blends passed down through three generations.',
  },
  {
    icon: 'chef',
    title: 'Master Chefs',
    description: 'Our kitchen is led by chefs with decades of experience in regional Indian and South Indian cuisine.',
  },
  {
    icon: 'truck',
    title: 'Fast Delivery',
    description: 'Hot food at your door within 30 minutes. Our delivery network covers the entire city.',
  },
  {
    icon: 'heart',
    title: 'Made with Love',
    description: 'Every plate is crafted with care. We treat every guest as we would treat our own family.',
  },
  {
    icon: 'shield',
    title: 'Hygiene Certified',
    description: 'We maintain the highest standards of cleanliness and food safety, certified by FSSAI.',
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Browse Our Menu',
    description: 'Explore our full range of starters, mains, South Indian specials, breads, desserts, and beverages.',
  },
  {
    number: '02',
    title: 'Place Your Order',
    description: 'Call us, walk in, or order through our delivery partners. Tell us your preferences and spice level.',
  },
  {
    number: '03',
    title: 'Enjoy Your Meal',
    description: 'Sit back and savor authentic Indian flavors, whether dining in or enjoying at home.',
  },
];

export interface EventItem {
  date: string;
  month: string;
  title: string;
  description: string;
  tag: string;
}

export const events: EventItem[] = [
  {
    date: '15',
    month: 'SEP',
    title: 'Onam Sadya Festival',
    description: 'A traditional Kerala feast served on a banana leaf with over 20 dishes. Vegetarian special.',
    tag: 'Festival Special',
  },
  {
    date: '02',
    month: 'OCT',
    title: 'Live Ghazal Night',
    description: 'Enjoy soulful ghazal performances while dining. A magical evening of music and fine food.',
    tag: 'Live Music',
  },
  {
    date: '12',
    month: 'OCT',
    title: 'Diwali Sweet Making Workshop',
    description: 'Learn to make traditional Diwali sweets with our head chef. Includes take-home samples.',
    tag: 'Workshop',
  },
];
