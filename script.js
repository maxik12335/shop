const postTitle = document.querySelectorAll('.post__title'),
    postTitleBorder = document.querySelectorAll('.post-title__border'),
    postBody = document.querySelectorAll('.post__body')

postTitle.forEach((post, i) => {
    postTitle[i].addEventListener(() => {
        postTitleBorder[i].style.width = '100%'
        postBody[i].style.opacity = '1'
    })
})