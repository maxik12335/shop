const postTitle = document.querySelectorAll('.post__title'),
    postTitleBorder = document.querySelectorAll('.post-title__border'),
    postBody = document.querySelectorAll('.post__body')

postTitle.forEach((post, i) => {
    post.addEventListener('click', () => {
        postTitleBorder.forEach(border => {
            border.style.width = '0'
        })
        postTitleBorder[i].style.width = '100%'

        postBody.forEach(body => {
            body.style.opacity = 0
        })

        postBody[i].style.opacity = 1
    })
})



const productesListItem = document.querySelectorAll('.productes-list__item')
productesListItem[0].addEventListener('click', () => {
    productesListItem.forEach(item => {
        item.style.color = 'black'
    })
    productesListItem[0].style.color = '#fffb9a';
})

productesListItem[2].addEventListener('click', () => {
    productesListItem.forEach(item => {
        item.style.color = 'black'
    })
    productesListItem[2].style.color = '#fffb9a';
})

productesListItem[1].addEventListener('click', () => {
    productesListItem.forEach(item => {
        item.style.color = 'black'
    })
    productesListItem[1].style.color = 'silver';
})

productesListItem[3].addEventListener('click', () => {
    productesListItem.forEach(item => {
        item.style.color = 'black'
    })
    productesListItem[3].style.color = 'silver';
})