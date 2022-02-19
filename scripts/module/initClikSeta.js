export default function initClikSeta () {

    const setaTop = document.querySelector('.l-2');



    function clikSeta (event) {
        event.preventDefault();
      
        const top = window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    
        
    }
    
    
    setaTop.addEventListener('click', clikSeta);

}