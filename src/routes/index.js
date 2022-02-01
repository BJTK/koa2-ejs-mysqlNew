const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg:'这扯淡的人生',
    isMe:true,
    blogList:[
      {
        id:'1',
        title:'哈哈'
      },
      {
        id:'2',
        title:'呵呵'
      },
      {
        id:'3',
        title:'嗯嗯'
      },
      {
        id:'4',
        title:'啦啦'
      },
      {
        id:'5',
        title:'嘿嘿'
      },
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
