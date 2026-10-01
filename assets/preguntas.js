const PREGUNTAS = [
  {
    "m": "Módulo 1",
    "q": "¿Qué estableció la Declaración de Ginebra de 1924?",
    "o": [
      "Principios fundamentales para la protección de la niñez, como alimentación, vivienda, educación y atención médica adecuadas",
      "Un tratado legalmente vinculante para todos los países firmantes",
      "El derecho de los adolescentes a participar en la vida política",
      "La prohibición total del trabajo infantil en todo el mundo"
    ],
    "r": 0,
    "e": "El texto indica que la Declaración de Ginebra de 1924 estableció principios fundamentales para la protección de la niñez, entre ellos el derecho a recibir alimentación, vivienda, educación y atención médica adecuadas."
  },
  {
    "m": "Módulo 1",
    "q": "¿En qué se diferencia la Convención Internacional sobre los Derechos del Niño de la Declaración de Ginebra?",
    "o": [
      "Fue adoptada por las Naciones Unidas en 1948",
      "Es un tratado legalmente vinculante, a diferencia de la Declaración de Ginebra",
      "Establece solamente derechos de protección, sin derecho a la participación",
      "Fue redactada únicamente por expertos de la Provincia de Buenos Aires"
    ],
    "r": 1,
    "e": "Según el texto, a diferencia de la Declaración de Ginebra, la Convención es un tratado legalmente vinculante que establece los derechos fundamentales de los NNyA y promueve su participación activa."
  },
  {
    "m": "Módulo 1",
    "q": "Según las Reglas de Beijing (1985), ¿cuándo debe aplicarse la privación de libertad a los menores?",
    "o": [
      "Como medida preferente ante cualquier falta cometida",
      "Cuando el menor no respeta las normas de la escuela",
      "Como último recurso y durante el menor tiempo posible",
      "Siempre que la familia no pueda orientarlo"
    ],
    "r": 2,
    "e": "Las Reglas de Beijing enfatizan que la privación de libertad debe ser utilizada como último recurso y durante el menor tiempo posible, fomentando medidas alternativas como la libertad condicional y los programas comunitarios."
  },
  {
    "m": "Módulo 1",
    "q": "¿Cómo se llamaba la ley sancionada el 29 de septiembre de 1919 que organizó un sistema de tutela estatal sobre menores en situación de riesgo?",
    "o": [
      "Ley 13.298 de Promoción y Protección Integral de los derechos del niño",
      "Ley 22.803 del Régimen Penal de Minoridad",
      "Ley 26.061 de Protección Integral de los Derechos de los NNyA",
      "Ley 10.903, conocida como Ley Agote o Ley de Patronato de menores"
    ],
    "r": 3,
    "e": "El texto señala que hasta 2005 rigió la Ley de Patronato de menores o Ley Agote, Ley N° 10.903, sancionada el 29 de septiembre de 1919, que estableció un sistema de tutela estatal."
  },
  {
    "m": "Módulo 1",
    "q": "¿Cuál es el objetivo central de la Ley bonaerense 15.348 de Buen Trato (2022)?",
    "o": [
      "Capacitar en la promoción del buen trato a NNyA y desnaturalizar prácticas inadecuadas de los adultos",
      "Establecer la obligatoriedad del jardín de infantes de 3 a 5 años",
      "Erradicar el trabajo infantil en todo el territorio de la Provincia de Buenos Aires",
      "Otorgar cobertura de salud integral a través de IOMA"
    ],
    "r": 0,
    "e": "La Ley 15.348 de Buen Trato tiene por objeto la capacitación en promoción del buen trato a niños, niñas y adolescentes, para desnaturalizar las prácticas inadecuadas por parte de los adultos y combatir todo tipo de maltrato."
  },
  {
    "m": "Módulo 1",
    "q": "¿Qué transformación introdujo en Argentina la Ley N° 26.061, promulgada el 28 de septiembre de 2005?",
    "o": [
      "Fijó la edad mínima de 10 años para realizar tareas laborales legalmente",
      "Reconoció a los NNyA como sujetos de derechos y garantizó su desarrollo pleno y participación activa",
      "Creó el régimen de tutela estatal propio de la Doctrina de la Situación Irregular",
      "Impuso un abordaje securitario y punitivo sobre las infancias"
    ],
    "r": 1,
    "e": "La Ley 26.061 estableció un marco jurídico integral de protección de derechos, reconociendo la condición de sujetos de derechos de los niños, niñas y adolescentes y garantizando su desarrollo pleno y su participación activa."
  },
  {
    "m": "Módulo 1",
    "q": "¿Qué estableció la Ley 1.420, promulgada en el año 1884?",
    "o": [
      "La capacitación obligatoria en género para todo el personal del Estado",
      "La edad mínima de 10 años para realizar tareas laborales de manera legal",
      "La obligatoriedad, laicidad y gratuidad de la educación primaria",
      "La cobertura de salud integral durante el embarazo y la primera infancia"
    ],
    "r": 2,
    "e": "El texto indica que en 1884 se promulgó la Ley 1.420, que estableció la obligatoriedad, laicidad y gratuidad de la educación primaria, usando la escuela como garante de la construcción de ciudadanía argentina."
  },
  {
    "m": "Módulo 1",
    "q": "¿Cómo entendía la Doctrina de la Situación Irregular a los niños, niñas y adolescentes?",
    "o": [
      "Como sujetos de derechos con garantías de participación y protección integral",
      "Como beneficiarios prioritarios de becas y programas de apoyo escolar",
      "Como personas excluidas de toda intervención estatal y judicial",
      "Como una amenaza para la sociedad, con acciones correctivas e internación"
    ],
    "r": 3,
    "e": "Según el texto, esta doctrina consideraba que el menor se encontraba en situación irregular por atributos personales y conductas desviadas, configurando una amenaza para la sociedad, con acciones correctivas, separación e internación como modo de normalización."
  },
  {
    "m": "Módulo 1",
    "q": "¿Cuándo fue adoptada la Convención Internacional sobre los Derechos del Niño?",
    "o": [
      "El 20 de noviembre de 1989, entrando en vigor el 2 de septiembre de 1990",
      "El 28 de septiembre de 2005, junto con la Ley de Protección Integral",
      "El 4 de octubre de 2006, al sancionarse la educación sexual integral",
      "El 2 de septiembre de 1990, entrando en vigor en 1991"
    ],
    "r": 0,
    "e": "La Convención fue adoptada por consenso el 20 de noviembre de 1989 y entró en vigor el 2 de septiembre de 1990; esa fecha se conmemora como el Día Universal de los Derechos del Niño."
  },
  {
    "m": "Módulo 1",
    "q": "¿Cuál es el objetivo de la Ley bonaerense 14.580 de Salud Mental (2014)?",
    "o": [
      "Capacitar en género y prevención de violencias a los tres poderes del Estado",
      "Promover el derecho a la protección de la salud mental y el pleno goce de los derechos humanos",
      "Garantizar la alimentación escolar adecuada a niños y adolescentes en edad escolar",
      "Regular el ejercicio de la soberanía y la identidad nacional"
    ],
    "r": 1,
    "e": "La Ley 14.580 de Salud Mental tiene por función promover el derecho a la protección de la salud mental y el completo goce de los derechos humanos de las personas con algún sufrimiento mental."
  },
  {
    "m": "Módulo 2",
    "q": "¿Cómo sintetiza el texto el sistema del patriarcado?",
    "o": [
      "Un sistema de jerarquización institucionalizado que organiza diferencias transformándolas en desigualdades y en dominación de lo masculino sobre lo femenino",
      "Un sistema económico y social basado en la propiedad privada de los medios de producción y en el uso del capital",
      "Una tendencia a situar lo propio como centro y a imponer esa manera de concebir el mundo como la única posible",
      "Un régimen que asume que todas las personas son varones o mujeres y que la heterosexualidad es la única forma normal"
    ],
    "r": 0,
    "e": "El texto sintetiza al patriarcado como un sistema de jerarquización institucionalizado que se organiza a partir de diferencias que son transformadas en desigualdades y en causa de dominación de lo masculino sobre lo femenino."
  },
  {
    "m": "Módulo 2",
    "q": "Según el texto, ¿en qué se basa el capitalismo?",
    "o": [
      "En la distribución asimétrica y unilateral de las posibilidades de participación y control de las personas",
      "En la propiedad privada de los medios de producción y en el uso del capital como fuente de riqueza",
      "En la tendencia a situar lo propio como centro frente a un otro que no lo comparte",
      "En la idea de que la adultez es el momento de realización más acabada del modelo de lo humano"
    ],
    "r": 1,
    "e": "El capitalismo es un sistema económico y social que se basa en la propiedad privada de los medios de producción y en el uso del capital como fuente de riqueza, cuyos elementos principales son el capital y el trabajo."
  },
  {
    "m": "Módulo 2",
    "q": "En el adultocentrismo, ¿qué ocupa el centro?",
    "o": [
      "El mercado y la acumulación de ganancias",
      "Los varones y su dominio sobre las mujeres",
      "El o los adultos y su capacidad de razón o racionalidad",
      "La heterosexualidad como única forma aceptable y normal de deseo"
    ],
    "r": 2,
    "e": "En el adultocentrismo, lo que está en el centro es el o los adultos y su capacidad de razón o racionalidad, la etapa en que las personas tienen la razón, la consciencia y el control de todo el universo simbólico."
  },
  {
    "m": "Módulo 2",
    "q": "Desde la filosofía, ¿cómo define el texto los centrismos?",
    "o": [
      "La tendencia a clasificar los problemas cotidianos de la vida como problemas de salud",
      "La reproducción de mandatos y roles a través de los medios masivos de comunicación",
      "La acumulación de un excedente de la producción más allá de lo necesario para la sobrevivencia",
      "La tendencia a situar lo propio como centro y a imponer esa manera como la única posible"
    ],
    "r": 3,
    "e": "Desde la filosofía se define a los centrismos como la tendencia a situar lo propio como centro, imponiéndose como la única manera posible de concebir el mundo. El texto afirma que todo centrismo es una forma de violencia."
  },
  {
    "m": "Módulo 2",
    "q": "¿Qué entiende el texto por etiqueta?",
    "o": [
      "La tendencia a ordenar y nombrar a las personas desde un adjetivo o un rasgo, convirtiendo formas de estar en formas de ser",
      "La clasificación de las etapas del ciclo vital en series rígidas, lineales e irreversibles del desarrollo",
      "El régimen que presupone que lo masculino y lo femenino son sustancialmente complementarios en cuanto al deseo",
      "La imposición de roles mediante regímenes, hábitos, costumbres, prácticas cotidianas, leyes e instituciones sociales"
    ],
    "r": 0,
    "e": "La etiqueta es la tendencia a ordenar y nombrar a las personas desde algún adjetivo calificativo o algún rasgo de su cuerpo o personalidad, convirtiendo las formas de estar en formas de ser y reduciendo su ser a una sola cualidad."
  },
  {
    "m": "Módulo 2",
    "q": "¿Cuándo se produce, según el texto, la medicalización de la vida?",
    "o": [
      "Cuando se atribuye a la biología y la fisiología aspectos como la capacidad de gestar, el parto y la lactancia",
      "Cuando los problemas que están por fuera del área de la medicina se definen en términos de trastornos y se abordan como problemas médicos",
      "Cuando se considera que la niñez no es más que una etapa anterior y que ser niño solo tiene sentido como inversión a futuro",
      "Cuando los medios masivos de comunicación y las redes muestran patrones repetidos de cómo actuar, pensar y sentir"
    ],
    "r": 1,
    "e": "El texto llama medicalización de la vida al proceso en que los problemas que están por fuera del área de la medicina se definen en términos de trastornos y se abordan como problemas médicos."
  },
  {
    "m": "Módulo 2",
    "q": "¿Cuál es la respuesta del adultocentrismo frente a las formas novedosas de ver e interpretar la realidad?",
    "o": [
      "El reconocimiento de la niñez como otra racionalidad y la apertura a la construcción conjunta de sentidos",
      "La revisión de los mandatos de género y la deconstrucción de los estereotipos transmitidos por los medios",
      "La normalización mediante parámetros de lo que debe ser y la construcción de etiquetas, patologías y diagnósticos",
      "La incorporación de los NNyA a las decisiones sobre sus comienzos y modos de vivir la sexualidad"
    ],
    "r": 2,
    "e": "La respuesta desde el adultocentrismo frente a esa amenaza es la normalización: sostener unos parámetros de lo que debe ser y suceder y construir etiquetas, patologías y diagnósticos para aquellos que no los cumplen."
  },
  {
    "m": "Módulo 2",
    "q": "¿A quién define el patriarcado como sujeto hegemónico?",
    "o": [
      "Al adulto que posee la razón, la consciencia y el control de todo el universo simbólico",
      "Al trabajador que vende su fuerza de trabajo en el mercado laboral asalariado",
      "Al padre, instaurado como eje de autoridad unilateral en sus funciones de patrono, defensor o protector",
      "Al varón, blanco, heterosexual y sin discapacidad, según se aleje o no de esas características"
    ],
    "r": 3,
    "e": "El patriarcado define a un sujeto hegemónico: varón, blanco, heterosexual y sin discapacidad. Cuanto más se alejan las personas de tales características, más bajo en la jerarquía social las coloca."
  },
  {
    "m": "Módulo 2",
    "q": "¿Cómo define el texto la heteronormatividad en la sociedad capitalista y patriarcal?",
    "o": [
      "Un modo de cosificación que convierte las formas de estar en formas de ser de las personas",
      "Un régimen que asume que todas las personas son varón o mujer y que la heterosexualidad es la única forma aceptable y normal de expresar los deseos",
      "Una extensión del dominio patriarcal sostenida sobre las tareas que se le encomiendan a la mujer-madre",
      "Una lógica que define los problemas cotidianos de la vida en términos de trastornos y los aborda como problemas médicos"
    ],
    "r": 1,
    "e": "El texto define la heteronormatividad como un régimen que se ordena asumiendo que todas las personas son varones o mujeres, en sexo y género, y que la única forma aceptable y normal de expresar los deseos y la identidad es la heterosexualidad."
  },
  {
    "m": "Módulo 2",
    "q": "Según el texto, ¿cuál es la principal preocupación planteada por los adolescentes y jóvenes en la Provincia de Buenos Aires?",
    "o": [
      "El ingreso a la universidad o al mundo del empleo formal",
      "La obtención de un primer trabajo estable y bien remunerado",
      "El acceso a la vivienda y a la autonomía económica propia",
      "La salud mental: conductas autolesivas, intentos de suicidio, estados depresivos, consumos problemáticos y vínculos violentos"
    ],
    "r": 3,
    "e": "El texto señala que, en nuestra Provincia de Buenos Aires, la principal preocupación planteada por los adolescentes y jóvenes es la salud mental, incluyendo conductas autolesivas, intentos de suicidio, estados depresivos y consumos problemáticos."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué entiende el texto por autonomía progresiva?",
    "o": [
      "Proceso gradual por el cual los NNyA ejercen derechos según su edad y madurez",
      "Reconocimiento jurídico que suspende el ejercicio de derechos hasta la mayoría de edad",
      "Etapa del desarrollo físico que se completa recién a los 18 años",
      "Marco legal que garantiza únicamente la educación sexual integral obligatoria"
    ],
    "r": 0,
    "e": "El texto la define como un término y reconocimiento jurídico que indica un proceso gradual por el cual las niñas, niños y adolescentes pueden ir ejerciendo derechos por sí mismos/as de acuerdo a su edad y grado de madurez o capacidad de comprender, acordar o discernir."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué significa que los NNyA sean sujetos de derecho?",
    "o": [
      "Que el Estado los protege sin garantizar su participación como sujetos activos",
      "Que gozan de los derechos de todas las personas y de derechos específicos por su condición",
      "Que sus derechos se ejercen únicamente a partir de los 18 años",
      "Que la familia queda dispensada de los deberes específicos que le corresponden"
    ],
    "r": 1,
    "e": "El texto indica que gozan de los derechos que les corresponden a todas las personas, pero además tienen derechos específicos y especiales derivados de su condición, que se traducen en deberes específicos para la familia, la sociedad y el Estado."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué es \"poner límites\", según el módulo?",
    "o": [
      "Prohibir toda conducta que no sea aceptada por el grupo de pares",
      "Aplicar castigos que eviten repetir los comportamientos no deseados",
      "Transmitir una norma que cuida u ordena, con un argumento coherente y sostenido",
      "Fijar reglas permanentes que jamás pueden ser revisadas por los adultos"
    ],
    "r": 2,
    "e": "El texto define poner límites como la acción de transmitir una norma que cuida y/u ordena una situación, con un argumento coherente y sostenido, y que puede ser revisado si es necesario."
  },
  {
    "m": "Módulo 3",
    "q": "¿En qué momento debe realizarse la pesquisa neonatal (PPN)?",
    "o": [
      "Recién a los 6 meses de vida, junto con el control de crecimiento",
      "Durante la semana 20 de gestación, junto con la firma del plan de parto",
      "Siempre a las 24 horas de vida y exclusivamente en hospitales privados",
      "Antes del egreso de la institución, preferentemente entre las 48 y 72 horas de vida"
    ],
    "r": 3,
    "e": "El texto señala que la pesquisa neonatal se debe realizar a todos los bebés antes de su egreso de la institución, preferentemente entre las 48 hs y 72 hs de vida, para detectar precozmente enfermedades congénitas."
  },
  {
    "m": "Módulo 3",
    "q": "¿Entre qué edades suele manifestarse la pubertad según el texto?",
    "o": [
      "Entre 10 y 14 años en personas con vulva y entre 9 y 13 años en personas con pene",
      "Entre 9 y 13 años en personas con vulva y entre 10 y 14 años en personas con pene",
      "Entre 12 y 16 años en personas con vulva y entre 13 y 17 años en personas con pene",
      "Entre 7 y 11 años en personas con vulva y entre 8 y 12 años en personas con pene"
    ],
    "r": 1,
    "e": "El texto indica que en las personas con vulva la pubertad se produce generalmente entre los 9 y los 13 años de edad, mientras que en las personas con pene se da entre los 10 y los 14 años."
  },
  {
    "m": "Módulo 3",
    "q": "¿Cómo caracteriza el texto el período de latencia o segunda infancia?",
    "o": [
      "Etapa de 6 a 9-12 años en que la sexualidad genera pudor, vergüenza y asco",
      "Etapa de 0 a 2 años dominada por la angustia de separación",
      "Etapa de 12 a 16 años centrada en la búsqueda de identidad",
      "Etapa de gestación en que se proveen los suministros básicos en el útero"
    ],
    "r": 0,
    "e": "La segunda infancia va desde los 6 hasta los 9-12 años aproximadamente y se caracteriza por ser el período de latencia, fase en la que se constituyen los sentimientos de asco y vergüenza."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué acontecimiento ocurre alrededor de los 8 meses de vida?",
    "o": [
      "Se inicia el control de esfínteres de manera sostenida y autónoma",
      "Comienza la alimentación complementaria con los primeros alimentos sólidos",
      "Se instala la angustia del 8vo mes al empezar a elaborar la permanencia",
      "Se desencadena la pubertad con los primeros cambios corporales"
    ],
    "r": 2,
    "e": "Alrededor de los 8 meses de vida, coincidiendo con el cierre del tiempo de exterogestación, adviene la llamada angustia del 8vo mes, ligada a la elaboración de la noción de permanencia."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué es el plan de parto y en qué marco legal se inscribe?",
    "o": [
      "Un certificado de salud que se entrega a los 6 meses de vida del bebé",
      "Una autorización firmada por el equipo de salud para aplicar vacunas",
      "Un programa provincial de acompañamiento del embarazo y nutrición",
      "Un documento de voluntad de la familia presentado previo al nacimiento, en Ley 26.529"
    ],
    "r": 3,
    "e": "El texto lo define como un documento que expresa la voluntad de la familia, presentado a la institución previo al nacimiento, generalmente entre la semana 20 y 30 de gestación, enmarcado en la Ley Nacional 26.529 bajo la figura de Directivas Anticipadas."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué recomienda el texto sobre lactancia y chupete al inicio?",
    "o": [
      "Ofrecer el pecho a demanda y evitar el chupete hasta que la lactancia esté establecida",
      "Ofrecer el pecho cada tres horas y usar chupete desde el primer día",
      "Sustituir la leche materna por fórmula a partir de la segunda semana",
      "Retrasar la primera toma hasta las doce horas de vida del bebé"
    ],
    "r": 0,
    "e": "El módulo aconseja brindar el pecho a demanda, cada vez que lo pida y el tiempo que quiera, y no recomienda el uso de chupete durante las primeras semanas, hasta que la lactancia esté adecuadamente establecida."
  },
  {
    "m": "Módulo 3",
    "q": "¿Qué leyes configuran el marco legal de la Educación Sexual Integral?",
    "o": [
      "Ley Nacional 26.061 y Ley Provincial 13.298",
      "Ley Nacional 26.150 y Ley Provincial 14744",
      "Ley Nacional 26.529 y Ley Nacional 26.279",
      "Ley Nacional 27.611 y Ley Provincial 13688"
    ],
    "r": 1,
    "e": "El texto señala que con la creación e implementación de la Ley Nacional N° 26.150 y, a nivel provincial, la Ley N° 14744, se configura el marco legal que establece el derecho de los NNyA a recibir educación sexual integral."
  },
  {
    "m": "Módulo 4",
    "q": "¿Qué se entiende por cuidado según el módulo?",
    "o": [
      "Solo las tareas domésticas que realizan las mujeres en el hogar",
      "Únicamente el acompañamiento emocional que reciben niños, niñas y adolescentes",
      "Las actividades y tareas destinadas a satisfacer las necesidades de las personas para su bienestar",
      "Exclusivamente el trabajo remunerado que se presta desde el sector público"
    ],
    "r": 2,
    "e": "El cuidado son las actividades y tareas destinadas a satisfacer las necesidades de las personas para su bienestar en diversos planos: material, económico, moral y emocional."
  },
  {
    "m": "Módulo 4",
    "q": "Según el texto, ¿cuánto tiempo diario dedican al trabajo de cuidado no remunerado las mujeres de los sectores más empobrecidos en Argentina?",
    "o": [
      "Aproximadamente tres horas diarias",
      "Un promedio de ocho horas diarias",
      "Dos horas diarias como promedio",
      "Doce horas diarias como promedio"
    ],
    "r": 1,
    "e": "En Argentina, las mujeres de los sectores más empobrecidos dedican un promedio de ocho horas diarias al trabajo de cuidado no remunerado, mientras que las de mayores ingresos dedican aproximadamente tres."
  },
  {
    "m": "Módulo 4",
    "q": "¿Cuándo los roles de género se transforman en estereotipos?",
    "o": [
      "Cuando varían según la época y las sociedades en que se construyen",
      "Cuando refieren a las posiciones que socialmente ocupan las personas",
      "Cuando se esperan atributos diferenciados según el sexo asignado al nacer",
      "Cuando definen cómo las personas según sus genitales deben ser, sentir y pensar"
    ],
    "r": 3,
    "e": "Los roles se transforman en estereotipos cuando definen cómo las personas según sus genitales deben ser, sentir y pensar; el texto los caracteriza como una simplificación."
  },
  {
    "m": "Módulo 4",
    "q": "¿Qué permite vislumbrar el concepto de economía del cuidado?",
    "o": [
      "La interrelación y el rol del cuidado entre lo productivo y lo reproductivo",
      "El reconocimiento de un salario estatal para las tareas del hogar",
      "La separación entre el ámbito privado de la familia y el ámbito público",
      "El aumento de la jornada laboral formal de las mujeres"
    ],
    "r": 0,
    "e": "Hablamos de economía del cuidado como término que permite vislumbrar la interrelación, y rol del cuidado, entre lo productivo y lo reproductivo, abriendo una mirada integral y politizable."
  },
  {
    "m": "Módulo 4",
    "q": "¿Cómo define el texto el concepto de autocuidado?",
    "o": [
      "La contención emocional que reciben las personas receptoras de cuidado",
      "Las prácticas cotidianas y las decisiones que realiza una persona para cuidar su salud",
      "El tiempo dedicado a las tareas domésticas del hogar sin ayuda de otras personas",
      "El conjunto de reglas que la familia acuerda para convivir en armonía"
    ],
    "r": 1,
    "e": "El autocuidado se entiende como las prácticas cotidianas y las decisiones que realiza una persona para cuidar su salud, y previene situaciones de estrés y sobre-exigencia."
  },
  {
    "m": "Módulo 4",
    "q": "¿De qué palabra latina proviene autoridad y qué significa?",
    "o": [
      "De potestas, derivado del verbo punire, que significa castigar y corregir",
      "De obedientia, derivado del verbo dicere, que significa ordenar y mandar",
      "De auctoritas, derivado del verbo augere, que significa aumentar, hacer crecer",
      "De disciplina, derivado del verbo regere, que significa gobernar y controlar"
    ],
    "r": 2,
    "e": "La palabra autoridad proviene del latín auctoritas, derivado del verbo augere, que significa aumentar, hacer crecer, magnificar, e implica reconocer la potencialidad de la persona."
  },
  {
    "m": "Módulo 4",
    "q": "¿Qué significa la Construcción Colectiva de Normas con los NNyA?",
    "o": [
      "Involucrar a los NNyA en el acuerdo que establece la norma, considerando sus intereses y emociones",
      "Imponer la norma desde la autoridad adulta sin explicar sus motivos ni beneficios",
      "Eliminar los límites para que los niños decidan libremente todas las cuestiones",
      "Mantener reglas invariables e intocables para garantizar la obediencia"
    ],
    "r": 0,
    "e": "Hablamos de Construcción Colectiva de Normas cuando involucramos a NNyA en el acuerdo que establece la norma, considerando sus intereses y emociones y los de los adultos a cargo."
  },
  {
    "m": "Módulo 4",
    "q": "¿Qué es la ternura, según el módulo?",
    "o": [
      "Un premio que se otorga a los niños cuando obedecen las reglas",
      "Una forma de evitar poner límites para no frustrar a los niños",
      "Una recompensa material que los adultos ofrecen a los NNyA",
      "Un buen trato: posición de la persona adulta desde la empatía y el miramiento"
    ],
    "r": 3,
    "e": "La ternura es un buen trato, es un trato pertinente: una posición donde la persona adulta se presta simbólicamente desde la empatía y el miramiento."
  },
  {
    "m": "Módulo 4",
    "q": "¿En qué consiste un proceso de singularización?",
    "o": [
      "En someterse a la subjetividad tal cual como la recibe el individuo",
      "En tomar los elementos del entorno para producir algo creativo y original",
      "En reproducir los modelos y estándares que impone la masividad",
      "En ajustarse a las categorías con las que el sistema ordena la realidad"
    ],
    "r": 1,
    "e": "Lo que caracteriza un proceso de singularización es que sea automodelador: tome los elementos del entorno para producir algo creativo, original, fuera de los márgenes de las categorías del sistema."
  },
  {
    "m": "Módulo 4",
    "q": "Cuando las tareas de cuidado se realizan en un contexto de sobre-exigencia, ¿qué sucede?",
    "o": [
      "Disminuye la calidad de atención, la empatía y el acompañamiento emocional",
      "Aumenta la capacidad de contención de quien brinda el cuidado",
      "Se fortalece el vínculo entre quien cuida y quien recibe el cuidado",
      "Se garantiza el bienestar de todas las personas involucradas"
    ],
    "r": 0,
    "e": "La situación de agotamiento deviene en una disminución de la calidad de atención, de la empatía, la paciencia y del acompañamiento emocional, volviendo violento ese contexto."
  },
  {
    "m": "Módulo 5",
    "q": "Según el texto, ¿a quiénes define UNICEF como víctimas de maltrato y abandono?",
    "o": [
      "A NNyA que sufren, de forma ocasional o habitual, actos de violencia física, sexual o emocional, en el grupo familiar o en otras instituciones",
      "A NNyA que padecen exclusivamente violencia física ejercida por personas desconocidas",
      "A NNyA que reciben castigos físicos aceptados y autorizados por su grupo familiar",
      "A NNyA que reciben diagnósticos psiquiátricos de carácter permanente"
    ],
    "r": 0,
    "e": "UNICEF define como víctimas de maltrato y abandono a las y los NNA que sufren, de forma ocasional o habitual, actos de violencia física, sexual o emocional, sea en el grupo familiar o en otras instituciones."
  },
  {
    "m": "Módulo 5",
    "q": "¿Cuáles son las dos asimetrías que el texto menciona como base de las violencias de adultas/os hacia NNyA?",
    "o": [
      "Asimetría económica y asimetría institucional",
      "Asimetría de poder y asimetría de conocimientos",
      "Asimetría de género y asimetría digital",
      "Asimetría afectiva y asimetría etaria"
    ],
    "r": 1,
    "e": "El texto señala la asimetría de poder, derivada de la diferencia de edad, roles, fuerza física o manipulación psicológica, y la asimetría de conocimientos, donde quien posee más conocimientos subordina a la otra persona."
  },
  {
    "m": "Módulo 5",
    "q": "¿En cuántos niveles cataloga el módulo la gravedad de la negligencia?",
    "o": [
      "En dos: temporal y permanente",
      "En tres: física, emocional y social",
      "En tres: leve, moderada y grave",
      "En cuatro: puntual, recurrente, crónica y estructural"
    ],
    "r": 2,
    "e": "El texto establece que la gravedad de la negligencia se cataloga en leve, moderada y grave, según los problemas físicos, emocionales o sociales que cause en el NNyA."
  },
  {
    "m": "Módulo 5",
    "q": "Según el Código Penal citado en el módulo, ¿a partir de qué edad puede generarse el consentimiento sexual?",
    "o": [
      "A partir de los 16 años",
      "A partir de los 13 años",
      "A partir de los 18 años",
      "A partir de los 21 años"
    ],
    "r": 3,
    "e": "El texto indica que el artículo 119 del Código Penal establece que el consentimiento sexual puede generarse a partir de los 13 años, y que por debajo de esa edad se comprende como abuso sexual."
  },
  {
    "m": "Módulo 5",
    "q": "¿Qué pena prevé el Código Penal para el grooming desde diciembre de 2013?",
    "o": [
      "Prisión de 6 meses a 4 años",
      "Prisión de 1 a 6 años",
      "Prisión de 2 a 8 años",
      "Prisión de 5 a 15 años"
    ],
    "r": 0,
    "e": "Desde diciembre de 2013 el Código Penal establece que el grooming es un delito que puede tener una pena de prisión de 6 meses a 4 años."
  },
  {
    "m": "Módulo 5",
    "q": "¿Cuál de estas conductas corresponde a la tipología de violencia emocional y/o psicológica?",
    "o": [
      "Limitar los recursos económicos destinados a satisfacer necesidades básicas",
      "Delegar el cuidado del NNyA en otras personas con desaparición física",
      "Simular enfermedades y someterlo a continuas exploraciones médicas",
      "Privar al/la niño/a de las oportunidades para establecer relaciones sociales"
    ],
    "r": 1,
    "e": "El texto incluye el aislamiento, es decir privar al/la niño/a de las oportunidades para establecer relaciones sociales, entre los tipos de conducta de la violencia emocional y/o psicológica."
  },
  {
    "m": "Módulo 5",
    "q": "Según el análisis de la línea 137 presentado en 2021, ¿cuántas víctimas NNyA de violencia familiar y/o sexual se registraron?",
    "o": [
      "3.219 víctimas",
      "9.989 víctimas",
      "12.470 víctimas",
      "7.615 víctimas"
    ],
    "r": 2,
    "e": "El texto reporta que se registraron 9.989 víctimas niñas, niños y adolescentes de violencia familiar y/o sexual durante el periodo analizado, de octubre de 2020 a septiembre de 2021."
  },
  {
    "m": "Módulo 5",
    "q": "¿Cuál es una condición del acoso escolar o bullying según el módulo?",
    "o": [
      "Ocurre exclusivamente entre personas de edades muy diferentes",
      "Se da solo en ámbitos digitales entre personas desconocidas",
      "Es intencional, se realiza de forma sistemática y se repite en el tiempo",
      "Concluye en una única ocasión y no vuelve a repetirse"
    ],
    "r": 3,
    "e": "El módulo define al acoso escolar como una situación de agresión intencional y sistemática entre personas de edades similares: no pasa una sola vez, sino que se repite en el tiempo."
  },
  {
    "m": "Módulo 5",
    "q": "¿Cómo define el módulo la violencia por razones de género en las niñeces y adolescencias?",
    "o": [
      "Como aquella que expresa una asimetría de poder respecto al género",
      "Como aquella que proviene solo de la diferencia de edad entre pares",
      "Como aquella que se ejerce únicamente en el ámbito institucional",
      "Como aquella derivada exclusivamente del abandono físico del hogar"
    ],
    "r": 0,
    "e": "El texto la define como la violencia que expresa una asimetría de poder respecto al género, en la que se manifiesta la desigualdad propia del orden heteronormativo."
  },
  {
    "m": "Módulo 5",
    "q": "¿A qué se refiere el concepto de modalidades de las violencias en este módulo?",
    "o": [
      "A las características que toman las violencias según el ámbito en el que se ejercen",
      "A la cantidad de víctimas registradas cada año por la línea 137",
      "A los diagnósticos psiquiátricos que reciben las niñas y niños",
      "A la gravedad legal de cada delito tipificado en el Código Penal"
    ],
    "r": 1,
    "e": "El texto aclara que cuando hablamos de modalidades nos referimos a las características que toman las violencias según el ámbito en el que se ejercen: familiar, institucional o digital."
  },
  {
    "m": "Módulo 6",
    "q": "Según el texto, ¿cómo se define la corresponsabilidad?",
    "o": [
      "La valoración de las redes comunitarias para favorecer la promoción y la restitución de los derechos vulnerados",
      "El acompañamiento en el desarrollo de NNyA como tarea exclusiva de sus familias o círculo cercano",
      "La articulación de los niveles Municipal, Provincial y Nacional en un mismo procedimiento",
      "El reconocimiento del entramado de opresiones que singularizan las trayectorias de vida de NNyA"
    ],
    "r": 0,
    "e": "El texto define la corresponsabilidad como la valoración de las redes comunitarias, apostando a las respuestas locales para favorecer la promoción y la restitución de los derechos vulnerados."
  },
  {
    "m": "Módulo 6",
    "q": "¿Cuándo los indicadores detectados pasan a constituir señales de alerta?",
    "o": [
      "Cuando coinciden con una causa orgánica verificada por el equipo de salud",
      "Cuando van asociados, existe más de un síntoma y/o son persistentes",
      "Cuando se presentan de manera aislada y de forma puntual",
      "Cuando provienen únicamente del relato del adulto responsable del NNoA"
    ],
    "r": 1,
    "e": "El texto indica que, cuando los indicadores van asociados (existe más de un síntoma) y/o son persistentes, pasan a ser lo que llamamos señales de alerta."
  },
  {
    "m": "Módulo 6",
    "q": "¿Cuáles son las características de la Línea 102 de alcance nacional?",
    "o": [
      "Es un servicio anónimo, gratuito y nacional para atender violencia de género",
      "Es un organismo constitucional independiente que controla los actos de la administración",
      "Es un servicio gratuito y confidencial, de atención especializada sobre los derechos de NNyA",
      "Es una línea reservada exclusivamente para denuncias policiales de delitos graves"
    ],
    "r": 2,
    "e": "La Línea 102 es un servicio gratuito y confidencial, de atención especializada sobre los derechos de niñas, niños y adolescentes, ante situaciones de vulneración de derechos."
  },
  {
    "m": "Módulo 6",
    "q": "¿En qué orden se presentan los tres momentos de la intervención en situaciones de violencias?",
    "o": [
      "Denuncia y protección; luego develación de la violencia; por último atención en el centro de salud",
      "Construcción de estrategias de protección; luego seguimiento y acompañamiento; por último detección",
      "Seguimiento y acompañamiento integral; luego entrevista con profesional; por último denuncia",
      "Develación o detección de la violencia; construcción de estrategias de protección y denuncia; seguimiento y acompañamiento integral"
    ],
    "r": 3,
    "e": "El texto presenta tres momentos: primero la develación o detección de la violencia, luego la construcción de estrategias de protección y la denuncia, y por último el seguimiento y acompañamiento integral."
  },
  {
    "m": "Módulo 6",
    "q": "¿Qué interpreta el enfoque de interseccionalidad?",
    "o": [
      "Las violencias en su complejidad, reconociendo el entramado de opresiones y vulneraciones que singularizan trayectorias de vida de NNyA",
      "Las situaciones de riesgo únicamente desde la mirada del núcleo familiar biológico o legal",
      "La respuesta institucional mediante prácticas exclusivamente interdisciplinarias",
      "La articulación de las partes que trabajan en común dentro de una red"
    ],
    "r": 0,
    "e": "El enfoque de interseccionalidad interpreta las violencias en su complejidad, ya que reconoce el entramado de opresiones y vulneraciones que singularizan trayectorias de vida de NNyA."
  },
  {
    "m": "Módulo 6",
    "q": "¿Qué establece el artículo 30 de la Ley 26061 sobre el deber de comunicar?",
    "o": [
      "Que la denuncia corresponde exclusivamente a las fuerzas policiales de la provincia",
      "Que debe comunicarse la vulneración de derechos ante la autoridad administrativa local, bajo responsabilidad por la omisión",
      "Que el establecimiento debe intervenir por sí mismo sin articular con otros organismos",
      "Que solo los progenitores pueden solicitar las medidas de protección"
    ],
    "r": 1,
    "e": "El artículo 30 obliga a los miembros de establecimientos educativos y de salud y a todo agente o funcionario público a comunicar la vulneración ante la autoridad administrativa de protección de derechos en el ámbito local, bajo aperci-bimiento de responsabilidad por dicha omisión."
  },
  {
    "m": "Módulo 6",
    "q": "¿Cuántas regiones instituyen los Servicios Zonales de Protección de Derechos?",
    "o": [
      "12 regiones con cabecera en las Direcciones Departamentales",
      "30 regiones con cabecera en los municipios bonaerenses",
      "22 regiones con cabecera en las Departamentales Judiciales",
      "8 regiones organizadas por la Defensoría del Pueblo"
    ],
    "r": 2,
    "e": "Los Servicios Zonales coordinan el funcionamiento de los Servicios Locales municipales, cuentan con un Coordinador, un equipo administrativo y un equipo técnico profesional interdisciplinario, e instituyen 22 regiones con cabecera en las Departamentales Judiciales."
  },
  {
    "m": "Módulo 6",
    "q": "¿Para qué está destinada la Línea 144 y cómo se caracteriza?",
    "o": [
      "Para la asistencia jurídica exclusiva en trámites de documentación y del CUD",
      "Para la atención especializada sobre derechos de NNyA en forma confidencial",
      "Para el asesoramiento sobre medidas de protección integral y excepcional de derechos",
      "Para la atención, contención y asesoramiento en situaciones de violencia de género; es anónima, gratuita y nacional"
    ],
    "r": 3,
    "e": "La línea 144 es el número asignado para la atención, contención y asesoramiento en situaciones de violencia de género, y es anónima, gratuita y nacional."
  },
  {
    "m": "Módulo 6",
    "q": "¿Qué es la Defensoría del Pueblo de la Provincia de Buenos Aires?",
    "o": [
      "Un organismo constitucional independiente y autónomo que defiende derechos ante hechos, actos u omisiones de la administración",
      "Un servicio zonal que coordina los Servicios Locales municipales de la provincia",
      "Una línea gratuita y confidencial de atención especializada a niñas, niños y adolescentes",
      "Un protocolo del Sistema de Salud para la detección de maltrato infantil"
    ],
    "r": 0,
    "e": "El texto la define como un organismo constitucional independiente y autónomo cuya misión es la defensa y protección de los derechos, garantías e intereses tutelados en la Constitución Nacional y las leyes."
  },
  {
    "m": "Módulo 6",
    "q": "Ante señales físicas de dolor, sangrado, golpes, embarazo o dudas sobre la integridad física, ¿qué se dispone?",
    "o": [
      "Se solicita el acompañamiento policial y se traslada al adulto responsable para que declare",
      "Se dispondrá el traslado urgente al centro de salud más próximo y quien lo acompañe permanecerá hasta la denuncia",
      "Se aguarda un seguimiento en observación hasta confirmar la hipótesis, sin intervención inmediata",
      "Se notifica a la autoridad administrativa local para que evalúe el caso en un plazo posterior"
    ],
    "r": 1,
    "e": "El texto indica que, ante esas señales, se dispondrá el traslado urgente al centro de salud más próximo y quien lo acompañe permanecerá con él o ella hasta que se realice la denuncia y se tomen las medidas de protección."
  }
];
