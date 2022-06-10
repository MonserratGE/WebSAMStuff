/* ScrollReveal().reveal('#Inicio',{delay: 500});
ScrollReveal().reveal('#video',{delay: 500});
ScrollReveal().reveal('#adoptar',{delay: 500});
ScrollReveal().reveal('#catalogContainer',{delay: 500}); */

const info_template = document.getElementById("info_template");
const img_tamplate = document.getElementById("info_template");

/* Crear una función que permita cambiar el template string de una card completa
 * @param {string} template
 */

const btn_Adolf = document.getElementById("btn_Adolf");
const btn_Mitzi = document.getElementById("btn_Mitzi");
const btn_Aket = document.getElementById("btn_Aket");
const btn_Monse = document.getElementById("btn_Monse");
const btn_Manu = document.getElementById("btn_Manu");
const btn_Mijh = document.getElementById("btn_Mijh");

const template_Adolf = `
            <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100 p-3" src="assets/img/Adolfo.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Mario Adolfo Rodriguez Gutierrez  </h5>
                        <p class="text-center">
                        Equipo SCRUM
                        </p>
                        <hr>
                        <p>
                        Egresado como Técnico Quimico Industrial con titulo y cedula profesional del Conalep Tlalpan 2.
                        Ingeniería Robótica Industrial hasta 5to semestre en la ESIME Azcapotzalco del IPN.
                        Con espíritu emprendedor, persistente, perseverante y servicial.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>`;
const template_Mitzi = `
            <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100  p-3" src="assets/img/Mitzi.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Mitzi Daniela Hernández Sánchez </h5>
                        <p class="text-center">
                            Equipo Scrum
                        </p>
                        <hr>
                        <p>
                            Recien egresada en Ingeniería en sistemas computacionales y afortunadamente he tenido la oportunidad de realizar mis prácticas profesionales, residenncias profesionales y servicio social en diversas instituciones educativas, donde he ejercido algo referente a mi carrera e incluso he hecho proyectos de sichas instituciones.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>`;
const template_Akes = `
            <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100 p-3" src="assets/img/Aketzali.jpeg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Miriam Aketzali González Sánchez  </h5>
                        <p class="text-center">
                            Equipo Scrum
                        </p>
                        <hr>
                        <p>
                            Egresada en Administración con gran interés en temas tecnológicos y de negocios, estudiainte en Desarrollo de Java Full Stack, con buena actitud y experinecia en trabajo en equipo, adaptibilidad y cooperación.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>  `;
const template_Monse = `
            <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100 p-3" src="assets/img/Monse.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Monserrat Amanda García Espinoza  </h5>
                        <p class="text-center">
                            Scrum Master
                        </p>
                        <hr>
                        <p>
                            Técnica en Infromática y Desarrolladora Java Full Stack. Tengo gran intéres en las herramientas tecnológicas. En muchos aspectos, agente de cambio. En busca de oportunidades en donde pueda desarrollar mis habilidades y adquirir experiencia.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>`;
const template_Manu = `
                <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100 p-3" src="assets/img/Manuel.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Manuel Adán Carrillo Zavala  </h5>
                        <p class="text-center">
                            Product Owner
                        </p>
                        <hr>
                        <p>
                            Apasionado Ingeniero en Desarrollo y Gestion del Software, con 2 años de experiencia en el ramo. A lo largo de este tiempo he tenido la frotuna de participar en las diferentes áreas del desarrollo de software, así como también la oportunidad de apoyar en la gestión de algunos proyectos.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>`;
const template_Mijh = `
            <div class="container color-fff">
                <div class="row align-items-center">
                    <div id="" class="col-12 col-md-6 mt-5 mb-5">
                        <div id="img_tamplate">
                            <img class="img-card w-100 h-100 p-3" src="assets/img/Mijhail.jpeg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mb-5 fondo_izq">
                        <div id="info_template" class="d-flex flex-column">
                        <h5 class="text-center">  Mijhail Cabrera Huerta  </h5>
                        <p class="text-center">
                            Equipo Scrum
                        </p>
                        <hr>
                        <p>
                            Algunos de los atributos que me caracterizan son: Ambición, Perseverante, Paciente y Dedicado. Considero que tengo capacidad de análisis a un problema, sea cual sea, que esto a su vez junto con mi paciencia y perseverancia me han dado excelentes resultados en el ámbito personal y laboral.
                        </p>
                            <hr>
                        </div>
                    </div>
                </div>`;





btn_Adolf.addEventListener("click", () => {
  info_template.innerHTML = template_Adolf;
});

btn_Mitzi.addEventListener("click", () => {
  info_template.innerHTML = template_Mitzi;
});

btn_Mijh.addEventListener("click", () => {
  info_template.innerHTML = template_Mijh;
});

btn_Manu.addEventListener("click", () => {
  info_template.innerHTML = template_Manu;
  
});

btn_Monse.addEventListener("click", () => {
  info_template.innerHTML = template_Monse;
});

btn_Aket.addEventListener("click", () => {
  info_template.innerHTML = template_Akes;
});
