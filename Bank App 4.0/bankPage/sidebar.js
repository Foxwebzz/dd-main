let btnToggle = document.getElementById('btn-toggle')
let cancleToggle = document.getElementById('cancel-toggle')
let sidebar = document.querySelector('.sidebar')

btnToggle.addEventListener('click', function() {
    sidebar.classList.add('active-sidebar')
    btnToggle.style.display = 'none'
})

cancleToggle.addEventListener('click',function() {
    sidebar.classList.remove('active-sidebar')
    btnToggle.style.display = 'block'
})