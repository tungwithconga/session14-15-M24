"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const newPost = new Post(this.id, content);
        this.posts.push(newPost);
        return newPost;
    }
    comment(post, commentContent) {
        const comment = new Comment(this.id, commentContent);
        post.addComment(comment);
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(post) {
        post.addLike(this);
    }
    viewFeed() {
        let feed = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}
class Post {
    constructor(userId, content) {
        this.id = generateUniqueId(); // Assume there's a function to generate unique IDs
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(user) {
        this.likes.push(user);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comment {
    constructor(userId, content) {
        this.id = generateUniqueId();
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
