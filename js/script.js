// sidebar
const borger = document.querySelector('#borger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const ulSideBar = document.querySelector('.sidebar ul');
borger.onclick = () => {
    sidebar.style.display = 'unset';
};
closeBtn.onclick = () => {
    sidebar.style.display = 'none';
};
ulSideBar.onclick = () => {
    sidebar.style.display = 'none';
}

// nav color change on scroll
const navBar = document.querySelector('.nav-bar');
const about = document.querySelector('#about');
const ourProduct = document.querySelector('#products');
const contact = document.querySelector('#contact');
const footer = document.querySelector('.footer');
const logo = document.querySelectorAll('#galaxy > path');
const links = document.querySelectorAll('#page-links a');
const personIcone = document.querySelector('#user');
const trachIcone = document.querySelector('#trach');
const borgerIcone = document.querySelectorAll('#borger path[fill = "#7d5a50"]');
const borgerfff = document.querySelector('#borger path[fill = "#fff"]');


window.onscroll = () => {
    // lead section
    if (window.scrollY <= about.offsetTop - 200) {
        navBar.style.backgroundColor = '#fcdec0';
        trachIcone.style.fill = '#7D5A50';
        personIcone.style.fill = '#7D5A50';
        logo.forEach(x => {
            x.style.fill = '#502C1E'
        });
        borgerfff.style.fill = '#fff'
        borgerIcone.forEach(x => {
            x.style.fill = '#7D5A50'
        })
        links.forEach(x => {
            x.style.color = '#7d5a50'
        });
    }
    // about section
    if (window.scrollY >= about.offsetTop - 250) {
        navBar.style.backgroundColor = '#b4846c';
        trachIcone.style.fill = '#FCDEC0';
        personIcone.style.fill = '#FCDEC0';
        logo.forEach(x => {
            x.style.fill = '#FCDEC0'
        });
        borgerfff.style.fill = '#6B1E62'
        borgerIcone.forEach(x => {
            x.style.fill = '#FCDEC0'
        })
        links.forEach(x => {
            x.style.color = '#FCDEC0'
        });
    }
    // Product section
    if (window.scrollY >= ourProduct.offsetTop - 100) {
        navBar.style.backgroundColor = '#fcdec0';
        trachIcone.style.fill = '#7D5A50';
        personIcone.style.fill = '#7D5A50';
        logo.forEach(x => {
            x.style.fill = '#502C1E'
        });
        borgerfff.style.fill = '#fff'
        borgerIcone.forEach(x => {
            x.style.fill = '#7D5A50'
        })
        links.forEach(x => {
            x.style.color = '#7D5A50'
        });
    }
    // contact section
    if (window.scrollY >= contact.offsetTop - 100) {
        navBar.style.backgroundColor = '#7d5a50';
        trachIcone.style.fill = '#FCDEC0';
        personIcone.style.fill = '#FCDEC0';
        logo.forEach(x => {
            x.style.fill = '#FCDEC0'
        });
        borgerfff.style.fill = '#6B1E62'
        borgerIcone.forEach(x => {
            x.style.fill = '#FCDEC0'
        })
        links.forEach(x => {
            x.style.color = '#FCDEC0'
        });
    }
    // footer section
    if (window.scrollY >= footer.offsetTop - 180) {
        navBar.style.backgroundColor = '#fcdec0';
        trachIcone.style.fill = '#7D5A50';
        personIcone.style.fill = '#7D5A50';
        logo.forEach(x => {
            x.style.fill = '#502C1E'
        });
        borgerfff.style.fill = '#fff'
        borgerIcone.forEach(x => {
            x.style.fill = '#7D5A50'
        })
        links.forEach(x => {
            x.style.color = '#7d5a50'
        });
    }
}