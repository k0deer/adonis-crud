'use strict'

class PostController {
    async index({ view }){
        const posts =[
            {title:'post 1', body:'lorem  ipsun 1'},
            {title:'post 2', body:'lorem  ipsun 2'},
            {title:'post 3', body:'lorem  ipsun 3'}
        ];
        return view.render('posts.index',{
            title:'Latest posts',
            posts:posts
        })
    }
}

module.exports = PostController
