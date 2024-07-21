import { COLORS, icons, images } from "../constants";

export const friends = [
    {
        id: "1",
        name: "Tynisa Obey",
        phoneNumber: "+1-300-400-0135",
        avatar: images.user1,
    },
    {
        id: "2",
        name: "Florencio Dorance",
        phoneNumber: "+1-309-900-0135",
        avatar: images.user2,
    },
    {
        id: "3",
        name: "Chantal Shelburne",
        phoneNumber: "+1-400-100-1009",
        avatar: images.user3,
    },
    {
        id: "4",
        name: "Maryland Winkles",
        phoneNumber: "+1-970-200-4550",
        avatar: images.user4,
    },
    {
        id: "5",
        name: "Rodolfo Goode",
        phoneNumber: "+1-100-200-9800",
        avatar: images.user5,
    },
    {
        id: "6",
        name: "Benny Spanbauer",
        phoneNumber: "+1-780-200-9800",
        avatar: images.user6,
    },
    {
        id: "7",
        name: "Tyra Dillon",
        phoneNumber: "+1-943-230-9899",
        avatar: images.user7,
    },
    {
        id: "8",
        name: "Jamel Eusobio",
        phoneNumber: "+1-900-234-9899",
        avatar: images.user8,
    },
    {
        id: "9",
        name: "Pedro Haurad",
        phoneNumber: "+1-240-234-9899",
        avatar: images.user9
    },
    {
        id: "10",
        name: "Clinton Mcclure",
        phoneNumber: "+1-500-234-4555",
        avatar: images.user10
    },
];

export const faqKeywords = [
    {
        id: "1",
        name: "General"
    },
    {
        id: "2",
        name: "Account"
    },
    {
        id: "3",
        name: "Security"
    },
    {
        id: "4",
        name: "Booking"
    },
    {
        id: "5",
        name: "Payment"
    }
];

export const faqs = [
    {
        question: 'How do I search for services on the app?',
        answer: 'To search for services, simply enter your location, select the type of service you need, and browse through the available options.',
        type: "General"
    },
    {
        question: 'Can I view virtual tours of homes or spaces on this app?',
        answer: 'Yes, you can view virtual tours of homes or spaces. Look for the "Virtual Tour" option on the listings to explore them virtually.',
        type: "General"
    },
    {
        question: 'What should I do if I need to cancel or modify a service booking?',
        answer: 'To cancel or modify a service booking, go to the "My Bookings" section, find your booking, and follow the provided options to make changes.',
        type: "Account"
    },
    {
        question: 'How can I find services with specific features or requirements?',
        answer: 'You can use the app’s search filters to find services with specific features or requirements. Filter results by amenities such as pet-friendly, cleaning frequency, or specific tasks.',
        type: "Booking"
    },
    {
        question: 'Is there a way to make payments for service bookings within the app?',
        answer: 'Yes, you can securely make payments for service bookings using various payment methods available in the app, including credit/debit cards and digital wallets.',
        type: "Payment"
    },
    {
        question: 'Are my personal details and booking information kept secure?',
        answer: 'Yes, we prioritize the security and confidentiality of your personal details and booking information. Our app complies with strict privacy and data protection standards.',
        type: "Security"
    },
    {
        question: 'Can I request additional assistance with special requirements or preferences?',
        answer: "Yes, you can request additional assistance with special requirements or preferences during the booking process. Simply specify your preferences, and we'll do our best to accommodate them.",
        type: "General"
    },
    {
        question: 'How can I provide feedback or rate my service experience?',
        answer: 'After your service experience, you can provide feedback and rate your experience through the app’s rating and review system. Your feedback helps us improve our services for future users.',
        type: "General"
    },
    {
        question: 'Is customer support available through this app?',
        answer: 'While we provide booking services, our app is not for customer support. For assistance, please contact our support team through the designated channels provided in the app.',
        type: "General"
    },
];

export const messsagesData = [
    {
        id: "1",
        fullName: "Jhon Smith",
        isOnline: false,
        userImg: images.user1,
        lastSeen: "2023-11-16T04:52:06.501Z",
        lastMessage: 'I love you. see you soon baby',
        messageInQueue: 2,
        lastMessageTime: "12:25 PM",
        isOnline: true,
    },
    {
        id: "2",
        fullName: "Anuska Sharma",
        isOnline: false,
        userImg: images.user2,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'I Know. you are so busy man.',
        messageInQueue: 0,
        lastMessageTime: "12:15 PM",
        isOnline: false
    },
    {
        id: "3",
        fullName: "Virat Kohili",
        isOnline: false,
        userImg: images.user3,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Ok, see u soon',
        messageInQueue: 0,
        lastMessageTime: "09:12 PM",
        isOnline: true
    },
    {
        id: "4",
        fullName: "Shikhor Dhaon",
        isOnline: false,
        userImg: images.user4,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'Great! Do you Love it.',
        messageInQueue: 0,
        lastMessageTime: "04:12 PM",
        isOnline: true
    },
    {
        id: "5",
        fullName: "Shakib Hasan",
        isOnline: false,
        userImg: images.user5,
        lastSeen: "2023-11-21T04:52:06.501Z",
        lastMessage: 'Thank you !',
        messageInQueue: 2,
        lastMessageTime: "10:30 AM",
        isOnline: true
    },
    {
        id: "6",
        fullName: "Jacksoon",
        isOnline: false,
        userImg: images.user6,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 3,
        lastMessageTime: "10:05 PM",
        isOnline: false
    },
    {
        id: "7",
        fullName: "Tom Jerry",
        isOnline: false,
        userImg: images.user7,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 2,
        lastMessageTime: "11:05 PM",
        isOnline: true
    },
    {
        id: "8",
        fullName: "Lucky Luck",
        isOnline: false,
        userImg: images.user8,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Can you share the design with me?',
        messageInQueue: 2,
        lastMessageTime: "09:11 PM",
        isOnline: true
    },
    {
        id: "9",
        fullName: "Nate Jack",
        isOnline: false,
        userImg: images.user9,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Tell me what you want?',
        messageInQueue: 0,
        lastMessageTime: "06:43 PM",
        isOnline: true
    }
];

export const callData = [
    {
        id: "1",
        fullName: "Roselle Erhman",
        userImg: images.user10,
        status: "Incoming",
        date: "Dec 19, 2024"
    },
    {
        id: "2",
        fullName: "Willard Purnell",
        userImg: images.user9,
        status: "Outgoing",
        date: "Dec 17, 2024"
    },
    {
        id: "3",
        fullName: "Charlotte Hanlin",
        userImg: images.user8,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "4",
        fullName: "Merlin Kevin",
        userImg: images.user7,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "5",
        fullName: "Lavern Laboy",
        userImg: images.user6,
        status: "Outgoing",
        date: "Dec 16, 2024"
    },
    {
        id: "6",
        fullName: "Phyllis Godley",
        userImg: images.user5,
        status: "Incoming",
        date: "Dec 15, 2024"
    },
    {
        id: "7",
        fullName: "Tyra Dillon",
        userImg: images.user4,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
    {
        id: "8",
        fullName: "Marci Center",
        userImg: images.user3,
        status: "Missed",
        date: "Dec 15, 2024"
    },
    {
        id: "9",
        fullName: "Clinton Mccure",
        userImg: images.user2,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
];

export const banners = [
    {
      id: 1,
      discount: '40%',
      discountName: "Today's Special",
      bottomTitle: 'Get a discount for your next service order!',
      bottomSubtitle: 'Only valid for today!',
    },
    {
      id: 2,
      discount: '50%',
      discountName: "Weekend Sale",
      bottomTitle: 'Special discount for weekend booking!',
      bottomSubtitle: 'This weekend only!',
    },
    {
      id: 3,
      discount: '30%',
      discountName: "Limited Time Offer",
      bottomTitle: 'Hurry up! Limited time offer!',
      bottomSubtitle: 'Valid until supplies last!',
    },
    // Add more banner objects here
  ];

  export const categories = [
    {
      id: "1",
      name: "Cleaning",
      icon: icons.broom2,
      iconColor: "rgba(51, 94, 247, 1)",
      backgroundColor: "rgba(51, 94, 247, .12)",
    },
    {
      id: "2",
      name: "Repairing",
      icon: icons.repair2,
      iconColor: "rgba(255, 152, 31, 1)",
      backgroundColor: "rgba(255, 152, 31, .12)"
    },
    {
      id: "3",
      name: "Painting",
      icon: icons.paint2,
      iconColor: "rgba(26, 150, 240, 1)",
      backgroundColor: "rgba(26, 150, 240,.12)"
    },
    {
      id: "4",
      name: "Laundry",
      icon: icons.laundry,
      iconColor: "rgba(255, 192, 45, 1)",
      backgroundColor: "rgba(255, 192, 45,.12)"
    },
    {
      id: "5",
      name: "Appliance",
      icon: icons.appliance,
      iconColor: "rgba(245, 67, 54, 1)",
      backgroundColor: "rgba(245, 67, 54,.12)"
    },
    {
      id: "6",
      name: "Plumbing",
      icon: icons.plumbing,
      iconColor: "rgba(74, 175, 87, 1)",
      backgroundColor: "rgba(74, 175, 87,.12)"
    },
    {
      id: "7",
      name: "Shifting",
      icon: icons.car,
      iconColor: "rgba(0, 188, 211, 1)",
      backgroundColor: "rgba(0, 188, 211,.12)"
    },
    {
      id: "8",
      name: "Gardening",
      icon: icons.gardening,
      iconColor: "rgba(114, 16, 255, 1)",
      backgroundColor: "rgba(114, 16, 255, .12)"
    }
  ];


  export const mostPopularServices = [
    {
        id: "1",
        name: "Floor Cleaning",
        image: images.service1,
        providerName: "Kylee Danford",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "2",
        name: "House Cleaning",
        image: images.service2,
        providerName: "Alfonzo Magueritha",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 220,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "3",
        name: "Washing clothes",
        image: images.service3,
        providerName: "Mariana Juliana",
        price: 38,
        isOnDiscount: true,
        oldPrice: 52,
        rating: 4.8,
        numReviews: 830,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "4",
        name: "Bathroom Cleaning",
        image: images.service4,
        providerName: "Alexandra Polina",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "5",
        name: "AC Repairing",
        image: images.service5,
        providerName: "Mila Cyrus",
        price: 29,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "6",
        name: "Motorcycle Repairing",
        image: images.service6,
        providerName: "Ali Sunka Baba",
        price: 78,
        isOnDiscount: false,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 43,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "7",
        name: "Laundry Services Pro",
        image: images.service7,
        providerName: "Mariana Juliana Des",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 4809,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "4"
    },
    {
        id: "8",
        name: "House Plainting Services",
        image: images.service9,
        providerName: "Tom Jerry",
        price: 19,
        isOnDiscount: false,
        oldPrice: 19,
        rating: 4.9,
        numReviews: 15,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "3"
    },
    {
        id: "9",
        name: "Plumbing Services Pro",
        image: images.service10,
        providerName: "Jules Cesar",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "6"
    }
  ];

export const notifications = [
    {
        id: "1",
        icon: icons.chat,
        title: "Kathryn sent you a message",
        description: "Tap to see the message",
        date: "2024-01-16T04:52:06.501Z"
    },
    {
        id: "2",
        icon: icons.box,
        title: "Your Service is Already Delivered",
        description: "Tap to  see the detail shipping",
        date: "2024-01-23T04:52:06.501Z"
    },
    {   
        id: "3",
        icon: icons.chat,
        title: "Try The Latest Service From Tracky!",
        description: "Let’s try the feature we provide",
        date: "2024-01-23T08:52:06.501Z"
    },
    {
        id: "4",
        icon: icons.discount,
        title: "Get 20% Discount for First Transaction!",
        description: "For all transaction without requirements",
        date: "2024-01-28T08:52:06.501Z"
    },
    {   
        id: "5",
        icon: icons.chat,
        title: "Try The Latest Service From Tracky!",
        description: "Let’s try the feature we provide",
        date: "2024-01-29T08:52:06.501Z"
    },
    {
        id: "6",
        icon: icons.box,
        title: "Time reminder for your next service",
        description: "Your next service will be available soon",
        date: "2024-01-23T04:52:06.501Z"
    },
    {
        id: "7",
        icon: icons.chat,
        title: "Julia sent you a message",
        description: "Tap to see the message",
        date: "2024-01-16T04:52:06.501Z"
    },
    {
        id: "8",
        icon: icons.chat,
        title: "The Courier Joanna sent you a message",
        description: "Tap to see the message",
        date: "2024-01-16T04:52:06.501Z"
    },
    {
        id: "9",
        icon: icons.chat,
        title: "Lilia sent you a message",
        description: "Tap to see the message",
        date: "2024-01-16T04:52:06.501Z"
    },
    {
        id: "10",
        icon: icons.box,
        title: "New Category added to our service",
        description: "Tap to  see the detail about our new service",
        date: "2024-01-28T04:52:06.501Z"
    },
    {
        id: "11",
        icon: icons.discount,
        title: "Get 50% Discount for First Transaction!",
        description: "For all transaction without requirements",
        date: "2024-01-28T08:52:06.501Z"
    },
    {
        id: "12",
        icon: icons.chat,
        title: "Mily sent you a message",
        description: "Tap to see the message",
        date: "2024-01-31T04:52:06.501Z"
    },
  ];

  export const myWishlistServices = [
    {
        id: "1",
        name: "Floor Cleaning",
        image: images.service1,
        providerName: "Kylee Danford",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "2",
        name: "House Cleaning",
        image: images.service2,
        providerName: "Alfonzo Magueritha",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 220,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "3",
        name: "Washing clothes",
        image: images.service3,
        providerName: "Mariana Juliana",
        price: 38,
        isOnDiscount: true,
        oldPrice: 52,
        rating: 4.8,
        numReviews: 830,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "4",
        name: "Bathroom Cleaning",
        image: images.service4,
        providerName: "Alexandra Polina",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "5",
        name: "AC Repairing",
        image: images.service5,
        providerName: "Mila Cyrus",
        price: 29,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "6",
        name: "Motorcycle Repairing",
        image: images.service6,
        providerName: "Ali Sunka Baba",
        price: 78,
        isOnDiscount: false,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 43,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "7",
        name: "Laundry Services Pro",
        image: images.service7,
        providerName: "Mariana Juliana Des",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 4809,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "4"
    },
    {
        id: "8",
        name: "House Plainting Services",
        image: images.service9,
        providerName: "Tom Jerry",
        price: 19,
        isOnDiscount: false,
        oldPrice: 19,
        rating: 4.9,
        numReviews: 15,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "3"
    },
    {
        id: "9",
        name: "Plumbing Services Pro",
        image: images.service10,
        providerName: "Jules Cesar",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "6"
    }
  ];

  export const allServices = [
    {
        id: "1",
        name: "Floor Cleaning",
        image: images.service1,
        providerName: "Kylee Danford",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "2",
        name: "House Cleaning",
        image: images.service2,
        providerName: "Alfonzo Magueritha",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 220,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "3",
        name: "Washing clothes",
        image: images.service3,
        providerName: "Mariana Juliana",
        price: 38,
        isOnDiscount: true,
        oldPrice: 52,
        rating: 4.8,
        numReviews: 830,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "4",
        name: "Bathroom Cleaning",
        image: images.service4,
        providerName: "Alexandra Polina",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "1"
    },
    {
        id: "5",
        name: "AC Repairing",
        image: images.service5,
        providerName: "Mila Cyrus",
        price: 29,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 145,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "6",
        name: "Motorcycle Repairing",
        image: images.service6,
        providerName: "Ali Sunka Baba",
        price: 78,
        isOnDiscount: false,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 43,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "2"
    },
    {
        id: "7",
        name: "Laundry Services Pro",
        image: images.service7,
        providerName: "Mariana Juliana Des",
        price: 40,
        isOnDiscount: true,
        oldPrice: 78,
        rating: 4.8,
        numReviews: 4809,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "4"
    },
    {
        id: "8",
        name: "House Plainting Services",
        image: images.service9,
        providerName: "Tom Jerry",
        price: 19,
        isOnDiscount: false,
        oldPrice: 19,
        rating: 4.9,
        numReviews: 15,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "3"
    },
    {
        id: "9",
        name: "Plumbing Services Pro",
        image: images.service10,
        providerName: "Jules Cesar",
        price: 29,
        isOnDiscount: false,
        oldPrice: 29,
        rating: 4.9,
        numReviews: 120,
        date: "2025-01-12 | 14:25:45 UTC",
        categoryId: "6"
    }
  ];

  export const ratings = [
    {
        id: "1",
        title: "All"
    },
    {
        id: "6",
        title: "5"
    },
    {
        id: "5",
        title: "4"
    },
    {
        id: "4",
        title: "3"
    },
    {
        id: "3",
        title: "2"
    },
    {
        id: "2",
        title: "1"
    }
  ];

  export const reviews = [
    {
        id: "1",
        avatar: images.user1,
        name: "Elena Rodriguez",
        description: "Mariana did an amazing job! My house looks spotless and smells so fresh. Highly recommended! 😊👍",
        rating: 4.8,
        avgRating: 5,
        date: "2024-01-23T04:52:06.501Z",
        numLikes: 948
    },
    {
        id: "2",
        avatar: images.user2,
        name: "James Johnson",
        description: "Mariana is the best cleaner I've ever hired! She's thorough, efficient, and friendly. Couldn't be happier!",
        rating: 4.7,
        avgRating: 5,
        date: "2024-01-23T04:52:06.501Z",
        numLikes: 120
    },
    {
        id: "3",
        avatar: images.user3,
        name: "Emily Smith",
        description: "Mariana exceeded my expectations! She pays attention to every detail and leaves my home sparkling clean.",
        rating: 4.7,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 89
    },
    {
        id: "4",
        avatar: images.user4,
        name: "David Brown",
        description: "Mariana did a great job cleaning my apartment. She's reliable and professional. Highly recommend!",
        rating: 4,
        avgRating: 4,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 384
    },
    {
        id: "5",
        avatar: images.user6,
        name: "Sophia Martinez",
        description: "Mariana is fantastic! She's punctual, thorough, and friendly. My house has never looked better!",
        rating: 4.3,
        avgRating: 4,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 738
    },
    {
        id: "6",
        avatar: images.user7,
        name: "Michael Johnson",
        description: "Mariana is an excellent cleaner! She's reliable, efficient, and always does a fantastic job.",
        rating: 4.8,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 12
    },
    {
        id: "7",
        avatar: images.user8,
        name: "Jessica Garcia",
        description: "Mariana is amazing! She goes above and beyond to ensure my home is clean and organized. Highly recommended!",
        rating: 4.9,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 450
    }
  ];


  export const bookingItems = {
    cleaning: [
      {
        id: "1",
        name: "Living Room",
        price: 35
      }, 
      {
        id: "2",
        name: "Kitchen",
        price: 35
      },
      {
        id: "3",
        name: "Bathroom",
        price: 35
      },
      {
        id: "4",
        name: "Bedroom",
        price: 35
      },
      {
        id: "5",
        name: "Dining Room",
        price: 35
      },
      {
        id: "6",
        name: "Master Bedroom",
        price: 35
      },
      {
        id: "7",
        name: "Office",
        price: 35
      },
      {
        id: "8",
        name: "Terrace",
        price: 35
      },
      {
        id: "9",
        name: "Garden",
        price: 35
      },
      {
        id: "10",
        name: "Garage",
        price: 35
      }
    ]
  };
  
  export const hoursData = [
    {
        id: "1",
        hour: "09:00 AM"
    },
    {
        id: "2",
        hour: "10:00 AM"
    },
    {
        id: "3",
        hour: "11:00 AM"
    },
    {
        id: "4",
        hour: "12:00 AM"
    },
    {
        id: "5",
        hour: "02:00 PM"
    },
    {
        id: "6",
        hour: "03:00 PM"
    },
    {
        id: "7",
        hour: "04:00 PM"
    },
  ];
  
  
  export const positionList = [
    {
        latitude: 48.8566,
        longitude: 2.3522,
        name: 'Position 1',
        description: 'Position description 2',
    },
    {
        latitude: 43.2965,
        longitude: 5.3698,
        name: 'Position 2',
        description: 'Position description 2',
    },
    {
        latitude: 45.764,
        longitude: 4.8357,
        name: 'Position 3',
        description: 'Position description 3',
    },
    {
        latitude: 43.6045,
        longitude: 1.4442,
        name: 'Position 4',
        description: 'Position description 4',
    },
    {
        latitude: 43.7102,
        longitude: 7.2661,
        name: 'Position 5',
        description: 'Position description 5',
    },
  ];
  
  export const locations = [
    {
        id: "1",
        location: "New Montgomery",
        address: "4517 Washington Ave. Manchester...",
        distance: "3.21 KM"
    },
    {
        id: "2",
        location: "Manchester",
        address: "2118 Thornridge Cir. Syracuse...",
        distance: "2.24 KM"
    },
    {
        id: "3",
        location: "New Castle",
        address: "2118 Thornridge Cir. Syracuse...",
        distance: "2.84 KM"
    }
  ];
  
  
  export const upcomingBookings = [
    {
      id: 1,
      status: "Scheduled",
      date: "15 Feb, 10:00 AM",
      serviceType: 'Plumbing',
      provider: "Pipes & Wrenches",
      image: images.user1,
      price: 89.99,
      address: "123 Main St, Cityville",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.9,
    },
    {
      id: 2,
      status: "Scheduled",
      date: "16 Feb, 2:00 PM",
      serviceType: 'Cleaning',
      provider: "Sparkle Cleaners",
      image: images.user2,
      price: 49.99,
      address: "456 Oak St, Townsville",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.7
    },
    {
      id: 3,
      status: "Scheduled",
      date: "17 Feb, 9:00 AM",
      serviceType: 'Gardening',
      provider: "Greenscape Services",
      image: images.user3,
      price: 69.99,
      address: "789 Pine St, Villagetown",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.8
    },
    {
      id: 4,
      status: "Scheduled",
      date: "18 Feb, 3:00 PM",
      serviceType: 'Painting',
      provider: "Color Masters",
      image: images.user4,
      price: 149.99,
      address: "910 Elm St, Hamlet",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.7
    },
    {
      id: 5,
      status: "Scheduled",
      date: "19 Feb, 11:00 AM",
      serviceType: 'Home Repairs',
      provider: "FixItAll Solutions",
      image: images.user5,
      price: 99.99,
      address: "321 Maple St, Suburbia",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.9
    },
    {
      id: 6,
      status: "Scheduled",
      date: "20 Feb, 1:00 PM",
      serviceType: 'HVAC',
      provider: "Cool Breeze Services",
      image: images.user6,
      price: 199.99,
      address: "567 Cedar St, Countryside",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.9
    },
    {
      id: 7,
      status: "Scheduled",
      date: "21 Feb, 10:30 AM",
      serviceType: 'Pest Control',
      provider: "Bug Beaters",
      image: images.user7,
      price: 79.99,
      address: "890 Oakwood Dr, Riverside",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.9
    },
    {
      id: 8,
      status: "Scheduled",
      date: "22 Feb, 4:00 PM",
      serviceType: 'Carpet Cleaning',
      provider: "Fresh Floors",
      image: images.user8,
      price: 59.99,
      address: "123 Pinecone Ln, Lakeside",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.9
    },
    {
      id: 9,
      status: "Scheduled",
      date: "23 Feb, 12:00 PM",
      serviceType: 'Roofing',
      provider: "Top Roofers Inc.",
      image: images.user9,
      price: 299.99,
      address: "456 Redwood Rd, Mountainview",
      status: "Paid",
      hasRemindMe: true,
      rating: 4.6
    },
  ];
  
  export const completedBookings = [
    {
      id: 1,
      status: "Completed",
      date: "12 Feb, 11:30 AM",
      serviceType: 'Electrical Repair',
      provider: "Power Fix Solutions",
      image: images.user10,
      price: 129.99,
      address: "789 Pine St, Villagetown",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 2,
      status: "Completed",
      date: "14 Feb, 3:00 PM",
      serviceType: 'Landscaping',
      provider: "Green Thumb Landscapers",
      image: images.user11,
      price: 199.99,
      address: "910 Elm St, Hamlet",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.6,
    },
    {
      id: 3,
      status: "Completed",
      date: "16 Feb, 1:30 PM",
      serviceType: 'Interior Design',
      provider: "Design Experts",
      image: images.user1,
      price: 349.99,
      address: "321 Maple St, Suburbia",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.7,
    },
    {
      id: 4,
      status: "Completed",
      date: "17 Feb, 12:00 PM",
      serviceType: 'Home Security Installation',
      provider: "SecureHome Solutions",
      image: images.user2,
      price: 499.99,
      address: "567 Cedar St, Countryside",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 5,
      status: "Completed",
      date: "18 Feb, 2:30 PM",
      serviceType: 'Furniture Assembly',
      provider: "Assembly Masters",
      image: images.user3,
      price: 79.99,
      address: "890 Oakwood Dr, Riverside",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.6,
    },
    {
      id: 6,
      status: "Completed",
      date: "19 Feb, 11:30 AM",
      serviceType: 'Appliance Installation',
      provider: "InstallIt Pros",
      image: images.user4,
      price: 129.99,
      address: "123 Pinecone Ln, Lakeside",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 7,
      status: "Completed",
      date: "20 Feb, 10:00 AM",
      serviceType: 'Window Cleaning',
      provider: "Crystal Clear Windows",
      image: images.user5,
      price: 39.99,
      address: "456 Redwood Rd, Mountainview",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 8,
      status: "Completed",
      date: "21 Feb, 3:30 PM",
      serviceType: 'Flooring Installation',
      provider: "FloorCrafters",
      image: images.user6,
      price: 299.99,
      address: "789 Elmwood Ave, Lakeshore",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.7,
    },
    {
      id: 9,
      status: "Completed",
      date: "22 Feb, 2:00 PM",
      serviceType: 'Carpentry',
      provider: "WoodWorks Creations",
      image: images.user7,
      price: 159.99,
      address: "910 Birch St, Brookside",
      status: "Paid",
      hasRemindMe: false,
      rating: 4.8
    },
  ];
  
  export const cancelledBookings = [
    {
      id: 1,
      status: "Cancelled",
      date: "13 Feb, 9:00 AM",
      serviceType: 'Appliance Repair',
      provider: "Fix It Now",
      image: images.user2,
      price: 79.99,
      address: "321 Maple St, Suburbia",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 2,
      status: "Cancelled",
      date: "14 Feb, 2:00 PM",
      serviceType: 'Plumbing',
      provider: "Quick Fix Plumbers",
      image: images.user3,
      price: 99.99,
      address: "567 Cedar St, Countryside",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.7,
    },
    {
      id: 3,
      status: "Cancelled",
      date: "15 Feb, 11:30 AM",
      serviceType: 'Painting',
      provider: "Brush Strokes",
      image: images.user4,
      price: 149.99,
      address: "789 Elmwood Ave, Lakeshore",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.8,
    },
    {
      id: 4,
      status: "Cancelled",
      date: "16 Feb, 3:30 PM",
      serviceType: 'Gardening',
      provider: "Green Fingers",
      image: images.user5,
      price: 69.99,
      address: "123 Main St, Cityville",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.5,
    },
    {
      id: 5,
      status: "Cancelled",
      date: "17 Feb, 1:00 PM",
      serviceType: 'HVAC',
      provider: "Chill Zone HVAC",
      image: images.user6,
      price: 199.99,
      address: "456 Oak St, Townsville",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 6,
      status: "Cancelled",
      date: "18 Feb, 10:00 AM",
      serviceType: 'Pest Control',
      provider: "Critter Control",
      image: images.user7,
      price: 79.99,
      address: "789 Pine St, Villagetown",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 7,
      status: "Cancelled",
      date: "19 Feb, 2:30 PM",
      serviceType: 'Carpet Cleaning',
      provider: "Deep Clean Carpets",
      image: images.user8,
      price: 59.99,
      address: "910 Elm St, Hamlet",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 8,
      status: "Cancelled",
      date: "20 Feb, 12:00 PM",
      serviceType: 'Roofing',
      provider: "Leak Free Roofers",
      image: images.user9,
      price: 299.99,
      address: "321 Maple St, Suburbia",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
    {
      id: 9,
      status: "Cancelled",
      date: "21 Feb, 9:30 AM",
      serviceType: 'Home Repairs',
      provider: "FixItAll Solutions",
      image: images.user10,
      price: 99.99,
      address: "567 Cedar St, Countryside",
      status: "Unpaid",
      hasRemindMe: false,
      rating: 4.9,
    },
  ];
  
  export const TransactionHistoryData = [
    {
        id: '1',
        image: images.user1,
        name: 'Cleaning Services',
        date: 'Oct 14, 2023 | 8:00 AM',
        type: 'Purchase',
        amount: 25.99,
    },
    {
        id: '2',
        image: images.user2,
        name: 'Cleaning Services',
        date: 'Oct 14, 2023 | 9:00 AM',
        type: 'Purchase',
        amount: 20.0,
    },
    {
        id: '3',
        image: images.user4,
        name: 'Paintint Services',
        date: 'Oct 13, 2023 | 10:00 AM',
        type: 'Purchase',
        amount: 14.49,
    },
    {
        id: '4',
        image: images.user5,
        name: 'Repairing Services',
        date: 'Oct 13, 2023 | 11:00 AM',
        type: 'Purchase',
        amount: 39.99,
    },
    {
        id: '5',
        image: images.user6,
        name: 'Painting Services',
        date: 'Oct 13, 2023 | 1:00 PM',
        type: 'Purchase',
        amount: 25.99,
    },
    {
        id: '6',
        image: images.user7,
        name: 'Online Payment',
        date: 'Oct 12, 2023 | 3:00 PM',
        type: 'Payment',
        amount: 15.0,
    },
    {
        id: '7',
        image: images.user8,
        name: 'Paintint Services',
        date: 'Oct 12, 2023 | 5:00 PM',
        type: 'Purchase',
        amount: 14.49,
    },
  ];


  