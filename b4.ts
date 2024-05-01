class User {
    id: string;
    posts: Post[];
    followers: User[];

    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): Post {
        const newPost = new Post(this.id, content);
        this.posts.push(newPost);
        return newPost;
    }

    comment(post: Post, commentContent: string): void {
        const comment = new Comment(this.id, commentContent);
        post.addComment(comment);
    }

    follow(user: User): void {
        this.followers.push(user);
    }

    likePost(post: Post): void {
        post.addLike(this);
    }

    viewFeed(): Post[] {
        let feed: Post[] = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}

class Post {
    id: string;
    likes: User[];
    comments: Comment[];
    userId: string;
    content: string;

    constructor(userId: string, content: string) {
        this.id = generateUniqueId(); // Assume there's a function to generate unique IDs
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(user: User): void {
        this.likes.push(user);
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class Comment {
    id: string;
    userId: string;
    content: string;
    replies: Comment[];

    constructor(userId: string, content: string) {
        this.id = generateUniqueId(); 
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
