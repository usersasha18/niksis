const tabsBtn = document.querySelectorAll('.tab');
const tabsItem = document.querySelector('.tabs-content');


tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currernrBtn = item;
        let tabID = currernrBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabID);
        console.log(currentTab)

        

        tabsBtn.forEach(function(item){
            item.classList.remove('pressed');
        })
        
    
        currernrBtn.classList.add('pressed');

    })
})