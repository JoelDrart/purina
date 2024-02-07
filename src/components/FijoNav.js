import React, { useEffect } from 'react';

function NavFijo(){
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add("fixed");
    } else {
        document.getElementById("navbar").classList.remove("fixed");
        }
    }
}

export default NavFijo;