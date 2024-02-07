import React, { useEffect } from 'react';

function Switch() {
    useEffect(() => {
        const switchers = [...document.querySelectorAll('.switcher')];

        switchers.forEach(item => {
            item.addEventListener('click', function() {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'));
                this.parentElement.classList.add('is-active');
            });
        });

        // Limpiar los event listeners cuando el componente se desmonta
        return () => {
            switchers.forEach(item => {
                item.removeEventListener('click', function() {
                    switchers.forEach(item => item.parentElement.classList.remove('is-active'));
                    this.parentElement.classList.add('is-active');
                });
            });
        };
    }, []); // Se ejecuta solo cuando el componente se monta y se desmonta

    // Este componente no necesita retornar nada en particular
    return null;
}

export default Switch;
