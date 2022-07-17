const shareBtn = document.querySelector('.profile__share')
const shareBtn2 = document.querySelector('.profile__share2')


shareBtn.addEventListener('click', (e) => {
    shareBtn.classList.toggle('active')
})

shareBtn2.addEventListener('click', (e) => {
    shareBtn.classList.toggle('active')
})