const posts = {
  name: 'posts',
  isLoding: true,
  byId: {
    post1: {
      id:'post1',
      author:'user1',
      body:'......',
      comments: ['comment1', 'comment2'],
    },
    post2: {
      id: 'post2',
      auther: 'user2',
      body:'......',
      comment:['comment3', 'comment4', 'comment5'],
    },
  },
  allIds: ['post1', 'post2'],
}
 const copyOfPosts = {...posts}
 console.log(copyOfPosts);

///2

 const postss = {
  name: 'posts',
  isLoding: true,
  byId: {
    post1: {
      id:'post1',
      author:'user1',
      body:'......',
      comments: ['comment1', 'comment2'],
    },
    post2: {
      id: 'post2',
      auther: 'user2',
      body:'......',
      comment:['comment3', 'comment4', 'comment5'],
    },
  },
  allIds: ['post1', 'post2'],
}
const postss1 = JSON.parse(JSON.stringify(postss));
 
 
 console.log(postss1);
 
 
 
 
 
 /// 3. 

 const post = {
  name: 'posts',
  isLoding: true,
  id:'post1',
  author:'user1',
  body:'......',
  comments: ['comment1', 'comment2'],
    };
    const {comments: collor, hello, ...rest} = post
 console.log(collor,hello, rest );
 
/// 4.
 const comments = ['comment3', 'comment4', 'comment5', 'comment1']
 const [ underfined, comment1, ...rest1 ] = comments
 console.log(underfined);
 console.log(comment1);
 console.log(...rest1);
 
 
 