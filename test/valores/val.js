let total_emocional = Number(localStorage.getItem('total_emocional'));;
let total_desper = Number(localStorage.getItem('total_desper'));;
let total_personal = Number(localStorage.getItem('total_personal'));;


document.addEventListener("DOMContentLoaded", function() {
    consejos_emocional();
    consejos_desper();
    consejos_personal();
});

function consejos_emocional(){
    const nivel = document.getElementById("nivel_can");
    const consejos = document.getElementById("consejos_can");
    const consejos2 = document.getElementById("consejos_can2");
    const consejos3 = document.getElementById("consejos_can3");
    const consejos4 = document.getElementById("consejos_can4");
    const consejos5 = document.getElementById("consejos_can5");
    const titulo = document.getElementById("titulo_can");
    const info_nivel = document.getElementById("informacion_nivel_can");
    
    titulo.textContent="Consejos";
    if (total_emocional <= 18) {
        nivel.textContent="Nivel Bajo";
        info_nivel.textContent="El resultado significa que tiene un nivel bajo de cansancio emocional. Esto significa que existen situaciones de agotamiento emocional que están comenzando a afectarles en el trabajo.";
        consejos.textContent="•	Practica el autocuidado: Rutinas de autocuidado que incluyan tiempos de descanso, ejercicio, comer bien y dormir bien.";
        consejos2.textContent="• Establece límites: Aprende a decir que 'NO' cuando sea necesario, no te sientas obligado a asumir más responsabilidades de las que puedes realizar.";
        consejos3.textContent="• Comunicación clara y asertiva: Expresa tus necesidades y sentimientos de manera asertiva.";
        consejos4.textContent="• Ejercicios de relajación: Respiraciones profundas, meditación, yoga. ";
        consejos5.textContent="• Mindfulness: es la focalización de la atención en el momento presente, método para conseguir la atención plena y centrarnos en el aquí y el ahora.";
    } else if (total_emocional <= 36) {
        nivel.textContent="Nivel Medio";
        info_nivel.textContent="El resultado significa que tiene un nivel medio de cansancio emocional. Esto significa que existen situaciones de irritabilidad, falta de motivación, fatiga.";
        consejos.textContent="•	Este nivel indica la presencia de circunstancias que se manifiestan a través de irritabilidad, falta de motivación y fatiga. Por lo cual le recomendamos se dirija con un especialista.";
    } else { 
        nivel.textContent="Nivel Alto";
        info_nivel.textContent="El resultado significa que tiene un nivel alto de cansancio emocional. Esto significa que hay acontecimientos abrumadores que sobrepasan la capacidad de hacerles frente y que afectan en el ámbito laboral y personal.";
        consejos.textContent="•	En este nivel es fundamental que considere la posibilidad de consultar a un profesional de la psicología. Ya que esta condición denota la presencia de eventos abrumadores que superan la capacidad para enfrentarlos, y que tienen un impacto significativo tanto en el ámbito laboral como en el personal.";
    }
    
}

function consejos_desper(){
    const nivel = document.getElementById("nivel_des");
    const consejos = document.getElementById("consejos_des");
    const consejos2 = document.getElementById("consejos_des2");
    const consejos3 = document.getElementById("consejos_des2");
    const consejos4 = document.getElementById("consejos_des2");
    const titulo = document.getElementById("titulo_des");
    const info_nivel = document.getElementById("informacion_nivel_des");
  
    titulo.textContent="Consejos";
    if (total_desper <= 10) {
        nivel.textContent="Nivel Bajo";
        consejos.textContent="•	Entrenar estrategias de autorregulación emocional: ejercicios de respiración y de relajación.";
        consejos2.textContent="• Dialogo interno: interpretar las sensaciones propias de manera realista con auto instrucciones positivas.";
        consejos3.textContent="• Crea conexiones significativas: Trata de establecer relaciones valiosas con colegas y superiores, hacer uso de una comunicación clara y empática. ";
        consejos4.textContent="• Valora tu trabajo y el de los demás, evitar la autocrítica, desconsideraciones hacia los demás.";
        info_nivel.textContent="El resultado significa que tiene un nivel bajo de despersonalización. Esto significa que podría comenzar a padecer situaciones de desconexión en el entorno, con las personas y objetos, sensación de ser un observador.";
    } else if (total_desper <= 20) {
        nivel.textContent="Nivel Medio";
        consejos.textContent="•	En caso de que el resultado sea medio recurrir con un especialista de la salud mental.";
        consejos2.textContent="• ¡Alerta! Llegar a este punto de estrés desencadena conductas autodestructivas que atentan con el bienestar general de la propia persona. Es necesario acudir urgentemente con un especialista de la salud mental.";
        info_nivel.textContent="El resultado significa que tiene un nivel medio de despersonalización. Esto significa que podría comenzar a padecer sentimientos o actitudes negativas y cínicas hacia las personas destinatarias del trabajo.";
    } else {
        nivel.textContent="Nivel Alto";
        consejos.textContent="En este nivel quisiera sugerirte considerar la posibilidad de consultar a un profesional de la salud mental, como un psicólogo. En consideración a su bienestar y salud emocional, sería de suma importancia que considere la posibilidad de consultar a un psicólogo. Ya que un profesional cualificado puede proporcionar orientación especializada y apoyo para ayudarle a manejar estos desafíos de manera efectiva, facilitando así su camino hacia la recuperación y el bienestar emocional. A veces, hablar con un experto puede proporcionar perspectivas valiosas y apoyo para superar desafíos emocionales o situaciones complejas.";
        consejos2.textContent="• ¡Alerta! Llegar a este punto de estrés desencadena conductas autodestructivas que atentan con el bienestar general de la propia persona. Es necesario acudir urgentemente con un especialista de la salud mental.";
        info_nivel.textContent="El resultado significa que tiene un nivel alto de despersonalización. Esto significa que podría comenzar a padecer un sufrimiento significativo, deterioro de diferentes áreas vitales, alteración de la percepción propia, existe una falta de recursos emocionales para el afrontamiento de desafíos que el medio ofrece.";
    }
}

function consejos_personal(){
    const nivel = document.getElementById("nivel_rea");
    const consejos = document.getElementById("consejos_rea");
    const consejos2=document.getElementById("consejos_rea2");
    const titulo = document.getElementById("titulo_rea");
    const info_nivel = document.getElementById("informacion_nivel_rea");
   
    titulo.textContent="Consejos";
    if (total_personal <= 16) {
        nivel.textContent="Nivel Bajo";
        consejos.textContent="•	Establece metas claras y realista: Define metas especificas y alcanzables en tu trabajo.";
        consejos2.textContent="• Desarrolla tus fortalezas y habilidades: Identifica tus fortalezas y trabaja en desarrollarlas aún más, también busca oportunidades de aprendizaje y desarrollo en tu profesión.";
        info_nivel.textContent="El resultado significa que tiene un nivel bajo de realización personal. Esto significa que podría presentar baja energía, afectando en la productividad en el trabajo.";
    } else if (total_personal <= 32) {
        nivel.textContent="Nivel Medio";
        consejos.textContent="•	Este nivel sugiere la posibilidad de experimentar dificultades para manejar la presión, así como evitar las interacciones tanto en el ámbito personal como profesional. Es por aquello que no es recomendable que le demos consejos ya que necesita ser evaluado por un especialista.";
        info_nivel.textContent="El resultado significa que tiene un nivel medio de realización personal. Esto significa que podría presentar incapacidad para soportar la presión, evitación de las relaciones interpersonales y profesionales.";
    } else {
        nivel.textContent="Nivel Alto";
        consejos.textContent="•	En caso de usted encontrarse en este nivel recomendamos dirigirse a un especialista de manera crucial!. Ya que este nivel puede estar acompañado de sentimientos de incapacidad.";
        info_nivel.textContent="El resultado significa que tiene un nivel alto de realización personal. Esto significa que podría presentar sentimientos de incapacidad de afrontar nuevos retos, evaluación negativa de si mismo, inseguridad afectando en su rendimiento laboral.";
    }
}



