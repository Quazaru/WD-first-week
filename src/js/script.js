import '../css/styles.scss';
import 'normalize.css';
const aboutAccordion = document.querySelectorAll('.about__button');




const accordionToggle = () => {
    ;
}






aboutAccordion.forEach( (item, i) => {
    aboutAccordion[i].addEventListener('click', (event) => {
        const target = event.target;
        const accordion = target.closest('.about__accordion');
        accordion.classList.toggle("about__accordion-active")
    });
    console.log(item, i , aboutAccordion);
})