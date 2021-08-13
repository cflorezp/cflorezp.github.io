var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  eng:{
    titulo1: "Engineer - Developer",
    inicio: "Start",
    misHabilidades: "My Abilities",
    sistemasOperativos: "Operating Systems",
    misProyectos: "My Projects",
    contacto: "Contact",
    descripcionSO: "Skill in the management, configuration and maintenance of the following operating systems",
    enGithub: "On Github",
    enCodewars: "On Codewars",
    proximamente: "Coming Soon",
    ingeniero: "Engineer",
    desarrollador: "Developer"
  },

  esp:{
    titulo1: "Ingeniero - Desarrollador",
    inicio: "Inicio",
    misHabilidades: "Mis Habilidades",
    sistemasOperativos: "Sistemas Operativos",
    misProyectos: "Mis Proyectos",
    contacto: "Contacto",
    descripcionSO: "Destreza en el manejo, configuración y mantenimiento de los siguientes sistemas operativos",
    enGithub: "En Github",
    enCodewars: "En Codewars",
    proximamente: "Proximamente",
    ingeniero: "Ingeniero",
    desarrollador: "Desarrollador"
  },

  fr:{
    titulo1: "Ingénieur - Développeur",
    inicio: "Début",
    misHabilidades: "Mes Compétences",
    sistemasOperativos: "Systèmes Opératifs",
    misProyectos: "Mes Projets",
    contacto: "Contact",
    descripcionSO: "Compétence dans la gestion, la configuration et la maintenance des systèmes operatifs suivants",
    enGithub: "Sur Github",
    enCodewars: "Sur Codewars",
    proximamente: "Bientôt Disponible",
    ingeniero: "Ingénieur",
    desarrollador: "Développeur"
  }
};

if(window.location.hash){
  if(window.location.hash === "#eng"){
    subtitle1.textContent = language.eng.titulo1;
    minicio.textContent = language.eng.inicio;
    mhabilidades.textContent = language.eng.misHabilidades;
    so.textContent = language.eng.sistemasOperativos;
    mproyectos.textContent = language.eng.misProyectos;
    mcontacto.textContent= language.eng.contacto;
    submishabilidades.textContent = language.eng.misHabilidades;
    subso.textContent = language.eng.sistemasOperativos;
    descso.textContent = language.eng.descripcionSO;
    subpro.textContent = language.eng.misProyectos;
    github.textContent = language.eng.enGithub;
    codewars.textContent = language.eng.enCodewars;
    proximo.textContent = language.eng.proximamente; 
    fingeniero.textContent = language.eng.ingeniero;
    fdesarrollador.textContent = language.eng.desarrollador;
  }

  if(window.location.hash === "#fr"){
    subtitle1.textContent = language.fr.titulo1;
    minicio.textContent = language.fr.inicio;
    mhabilidades.textContent = language.fr.misHabilidades;
    so.textContent = language.fr.sistemasOperativos;
    mproyectos.textContent = language.fr.misProyectos;
    mcontacto.textContent= language.fr.contacto;
    submishabilidades.textContent = language.fr.misHabilidades;
    subso.textContent = language.fr.sistemasOperativos;
    descso.textContent = language.fr.descripcionSO;
    subpro.textContent = language.fr.misProyectos;
    github.textContent = language.fr.enGithub;
    codewars.textContent = language.fr.enCodewars;
    proximo.textContent = language.fr.proximamente; 
    fingeniero.textContent = language.fr.ingeniero;
    fdesarrollador.textContent = language.fr.desarrollador;
  }

  if(window.location.hash === "#es"){
    subtitle1.textContent = language.esp.titulo1
    minicio.textContent = language.esp.inicio;
    mhabilidades.textContent = language.esp.misHabilidades;
    so.textContent = language.esp.sistemasOperativos;
    mproyectos.textContent = language.esp.misProyectos;
    mcontacto.textContent= language.esp.contacto;
    submishabilidades.textContent = language.esp.misHabilidades;
    subso.textContent = language.esp.sistemasOperativos;
    descso.textContent = language.esp.descripcionSO;
    subpro.textContent = language.esp.misProyectos;
    github.textContent = language.esp.enGithub;
    codewars.textContent = language.esp.enCodewars;
    proximo.textContent = language.esp.proximamente; 
    fingeniero.textContent = language.esp.ingeniero;
    fdesarrollador.textContent = language.esp.desarrollador;
  }
}

//Esta funcion recarga la pagina
for (i = 0; i <= dataReload.length - 1; i++) {
  dataReload[i].onclick = function() {
      setTimeout(function () {
          location.reload();
      }, 50) // adjust the timer that works for you (1000 = 1 second)
  }
}

