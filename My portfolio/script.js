Let sections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    Sections.forEach(sec =>){
        Left top = window.scrollY;
        Let offset = sec.offsetTop -150;
        Let height = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links =>){
                links.classList.remove('active');
                document.querySelector(header nav a[href='+id+']'').classList.add(active);
            }
        }
    
    }
}
