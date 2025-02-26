export const posts = [
    {
        postId: '1',
        postTitle: '1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发',
        postCover: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        username: 'yyy',
        likeCount: 10
    },
    {
        postId: '2',
        postTitle: '1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发',
        postCover: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        username: 'yyy',
        likeCount: 10
    }, {
        postId: '4',
        postTitle: '1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发',
        postCover: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        username: 'yyy',
        likeCount: 10
    }, {
        postId: '5',
        postTitle: '1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发',
        postCover: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        username: 'yyy',
        likeCount: 10
    },
    {
        postId: '6',
        postTitle: '1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发1大发呆发呆发呆发呆发呆发',
        postCover: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        username: 'yyy',
        likeCount: 10
    },
];

export const postDetail = [{

    postId: "1",
    postTitle: "我是1",
    postContent: "我是1我是1我是1我是1",
    postPhotos: ["https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg"],
    createTime: "2025-01-01",

    userId: "1",
    userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
    username: "likaiyan",

    likeCount: 1,
    favoriteCount: 11,
    commentCount: 111,
    shareCount: 1111

}];

export const comment = [{
    commentId: 1,
    content: "11111111111111111111111111111111111111111111111111111111",
    createTime: new Date(),
    favoriteCount: 1,
    isFirstComment: true,

    isReply: false,
    replyToUserId: "",
    replyToUsername: "",
    replyToUserAvatar: "",

    userId: "1",
    username: "111",
    userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

    childComments: [{
        commentId: 2,
        content: "11111111111111111111111111111111111111111111111111111111",
        createTime: new Date(),
        favoriteCount: 1,
        isFirstComment: true,

        isReply: true,
        replyToUserId: "",
        replyToUsername: "222",
        replyToUserAvatar: "",

        userId: "1",
        username: "111",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

        childComments: []
    }, {
        commentId: 3,
        content: "11111111111111111111111111111111111111111111111111111111",
        createTime: new Date(),
        favoriteCount: 1,
        isFirstComment: true,

        isReply: true,
        replyToUserId: "",
        replyToUsername: "222",
        replyToUserAvatar: "",

        userId: "1",
        username: "111",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

        childComments: []
    }, {
        commentId: 4,
        content: "11111111111111111111111111111111111111111111111111111111",
        createTime: new Date(),
        favoriteCount: 1,
        isFirstComment: true,

        isReply: true,
        replyToUserId: "",
        replyToUsername: "222",
        replyToUserAvatar: "",

        userId: "1",
        username: "111",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

        childComments: []
    }, {
        commentId: 5,
        content: "11111111111111111111111111111111111111111111111111111111",
        createTime: new Date(),
        favoriteCount: 1,
        isFirstComment: true,

        isReply: true,
        replyToUserId: "",
        replyToUsername: "222",
        replyToUserAvatar: "",

        userId: "1",
        username: "111",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

        childComments: []
    }, {
        commentId: 6,
        content: "11111111111111111111111111111111111111111111111111111111",
        createTime: new Date(),
        favoriteCount: 1,
        isFirstComment: true,

        isReply: true,
        replyToUserId: "",
        replyToUsername: "222",
        replyToUserAvatar: "",

        userId: "1",
        username: "111",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",

        childComments: []
    }]
}]

export const searchHistory = ['coffee', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice'];
export const suggest = ['大发啦发涩发抖阿斯顿', 'teahouse', 'juice bar'];
export const hotNew = [
    { title: 'Item 1', tag: 'Tag 1', heat: '100万' },
    { title: 'Item 2', tag: 'Tag 2', heat: '100万' },
    { title: 'Item 3', tag: 'Tag 3', heat: '100.2万' },
    { title: 'Item 4', tag: 'Tag 4', heat: '200万' },
    { title: 'Item 5', tag: 'Tag 5', heat: '100万' }
];
export const searchResultTag = ['coffee', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice', 'tea', 'juice'];

export const accounts = [
    {
        accountId: "abc123",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 120,
        followType: 0 // 0未关注 1已关注 2互相关注

    },
    {
        accountId: "abc12312",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 1 // 0未关注 1已关注 2互相关注
    },
    {
        accountId: "abc1234",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 2 // 0未关注 1已关注 2互相关注
    },
    {
        accountId: "abc1235",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    },
    {
        accountId: "abc1236",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }, {
        accountId: "abc1237",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }, {
        accountId: "abc1238",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }, {
        accountId: "abc1239",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }, {
        accountId: "abc1230",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }, {
        accountId: "abc12311",
        userAvatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg",
        username: "JohnDoe",
        fans: 1200,
        followType: 0 // 0未关注 1已关注 2互相关注
    }
]

export const topics = [
    {
        "topicId": 1,
        "title": "The History of Programming Languages",
        "viewCount": 50000000,
        "discussCount": 20
    },
    {
        "topicId": 2,
        "title": "Cybersecurity Trends and Best Practices",
        "viewCount": 3001000,
        "discussCount": 15
    },
    {
        "topicId": 3,
        "title": "The Impact of Artificial Intelligence on Society",
        "viewCount": 250,
        "discussCount": 10
    },
    {
        "topicId": 4,
        "title": "The Future of Renewable Energy Sources",
        "viewCount": 180,
        "discussCount": 5
    }
]

export const products = [
    {
        productId: Math.floor(Math.random() * 100000), // Generates a random product ID between 0 and 99999
        title: 'Mock Product 123123231312321321312312312313' + Math.random().toString(36).substr(2, 9), // Generates a random product title
        picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        price: 18860, // Generates a random product price between 0 and 1000
        buyCount: Math.floor(Math.random() * 1000), // Generates a random buy count between 0 and 1000
        tag: ['MockTag1', 'MockTag2'], // Generates two random product tags
        shopId: Math.floor(Math.random() * 100000), // Generates a random shop ID between 0 and 99999
        shopName: 'Mock Shop ' + Math.random().toString(36).substr(2, 9) // Generates a random shop name
    },
    {
        productId: Math.floor(Math.random() * 100000), // Generates a random product ID between 0 and 99999
        title: 'Mock Product 123123231312321321312312312313' + Math.random().toString(36).substr(2, 9), // Generates a random product title
        picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        price: 18860, // Generates a random product price between 0 and 1000
        buyCount: Math.floor(Math.random() * 1000), // Generates a random buy count between 0 and 1000
        tag: ['MockTag1', 'MockTag2'], // Generates two random product tags
        shopId: Math.floor(Math.random() * 100000), // Generates a random shop ID between 0 and 99999
        shopName: 'Mock Shop ' + Math.random().toString(36).substr(2, 9) // Generates a random shop name
    }, {
        productId: Math.floor(Math.random() * 100000), // Generates a random product ID between 0 and 99999
        title: 'Mock Product 123123231312321321312312312313' + Math.random().toString(36).substr(2, 9), // Generates a random product title
        picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        price: 18860, // Generates a random product price between 0 and 1000
        buyCount: Math.floor(Math.random() * 1000), // Generates a random buy count between 0 and 1000
        tag: ['MockTag1', 'MockTag2'], // Generates two random product tags
        shopId: Math.floor(Math.random() * 100000), // Generates a random shop ID between 0 and 99999
        shopName: 'Mock Shop ' + Math.random().toString(36).substr(2, 9) // Generates a random shop name
    }, {
        productId: Math.floor(Math.random() * 100000), // Generates a random product ID between 0 and 99999
        title: 'Mock Product 123123231312321321312312312313' + Math.random().toString(36).substr(2, 9), // Generates a random product title
        picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        price: 18860, // Generates a random product price between 0 and 1000
        buyCount: Math.floor(Math.random() * 1000), // Generates a random buy count between 0 and 1000
        tag: ['MockTag1', 'MockTag2'], // Generates two random product tags
        shopId: Math.floor(Math.random() * 100000), // Generates a random shop ID between 0 and 99999
        shopName: 'Mock Shop ' + Math.random().toString(36).substr(2, 9) // Generates a random shop name
    }, {
        productId: Math.floor(Math.random() * 100000), // Generates a random product ID between 0 and 99999
        title: 'Mock Product 123123231312321321312312312313' + Math.random().toString(36).substr(2, 9), // Generates a random product title
        picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
        price: 18860, // Generates a random product price between 0 and 1000
        buyCount: Math.floor(Math.random() * 1000), // Generates a random buy count between 0 and 1000
        tag: ['MockTag1', 'MockTag2'], // Generates two random product tags
        shopId: Math.floor(Math.random() * 100000), // Generates a random shop ID between 0 and 99999
        shopName: 'Mock Shop ' + Math.random().toString(36).substr(2, 9) // Generates a random shop name
    }
]