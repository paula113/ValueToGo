import React from 'react';
import pptxgen from 'pptxgenjs';

const cciMock = {
  company: 'EmpresaABC',
  year: 2020,
  deficiences: [
    {
      title:
        'La Compañía no mantiene actualizado el libro de Sesiones de Directorio.',
      description:
        'Durante nuestra auditoría, observamos que el libro de Sesiones de Directorio no se encontraba actualizado con los últimos acuerdos alcanzados.  ',
      rubro: 'Negocio y ambiente operativo',
      example:
        'De esta forma, la última asentada en el libro es la que se celebró el 16 de noviembre de 2019 y que figura en el folio 80; sin embargo, es de nuestro conocimiento que las sesiones se dan con una frecuencia mensual, por lo que a la fecha de una de nuestras revisiones, 13 de febrero de 2020, no se habían asentado aún las sesiones correspondientes a los meses de diciembre de 2017 y enero de 2018.',
      company: '',
      level: 'Bajo',
      recommendation:
        'Recomendamos actualizar el libro de Sesiones de Directorio con todos los acuerdos alcanzados por los encargados del gobierno corporativo y contar de esta forma con una herramienta de monitoreo de las decisiones operativas y financieras de la Compañía.',
      answer: 'Realizaremos la revisión y actualización correspondiente.',
    },
    {
      title:
        'La Compañía tiene pendiente de actualizar la relación de firmas autorizadas en las entidades financieras.',
      description:
        'Durante nuestra auditoría, identificamos que la Compañía tiene pendiente de actualizar la relación de firmas autorizadas ante las entidades financieras.  Al respecto, las dichas entidades reportaron directamente a nosotros algunos firmantes autorizados que no aparecen en el listado operativo de representantes autorizados vigente de la Compañía.  Esta situación expone a la Compañía al riesgo de posible malversación de sus cuentas corrientes.',
      rubro: 'Efectivo y equivalente de efectivo',
      ejemplo:
        '* En el caso de ABC S.A.A., tenemos: Pedro Ventura y Angélica Zacarias (empleado) y Patricia Echevarria ( ex empleado)',
      company: '',
      level: 'Medio',
      answer:
        'A partir del Diciembre de este periodo, se realizará la actividad recomendada por el área correspondiente. ',
      recommendation:
        'Recomendamos se establezca un procedimiento para informar a las entidades financieras cuando un representante legal ya no labora para la Compañía, esto con el fin de derogar los poderes que le fueron otorgados.  Asimismo, realizar las gestiones necesarias con dichas entidades para actualizar la relación de firmas autorizadas con el fin de mitigar cualquier riesgo de malversación de fondos.',
    },
    {
      title:
        'La Compañía debe conciliar mensualmente los reportes  de las cuentas por cobrar del área de Créditos y Cobranzas con los saldos registrados en la contabilidad.',
      description:
        'Durante nuestra auditoría, identificamos que la Compañía no realiza una oportuna conciliación entre la información del área de Créditos y Cobranzas referente a los saldos de las cuentas por cobrar comerciales y la data registrada por el área de Contabilidad; está última presenta un saldo mayor al que reporta el área operativa.  Esta situación expone a la Compañía al riesgo de no llevar un control adecuado de la incobrabilidad de la cartera que mantiene la Compañía en sus estados financieros.',
      rubro: 'Cuentas por cobrar comerciales',
      ejemplo:
        'Por ejemplo, se identificaron los siguientes casos de diferencias: * Cliente A por S/200,000 * Cliente B por S/150,000',
      company: '',
      level: 'Alto',
      answer:
        'Contrataremos un proveedor para realizar las actividades propuestas. Asimismo, al cierre del ejercicio se realizaron las conciliaciones  por los clientes indicados.',
      recommendation:
        'Recomendamos que se elaboren conciliaciones períodicas de saldos entre el listado de cuentas por cobrar que elabora el departamento de Créditos y Cobranzas y el listado que surge de los registros contables con el fin de identificar oportunamente alguna posible distorsión en los saldos de cuentas por cobrar reflejados en los registros contables.',
    },
  ],
};

const cciTemplate = {
  summary: {
    paragraph1:
      'Hemos incluido en la página siguiente, para su conveniencia, un cuadro que resume nuestros hallazgos de las deficiencias identificadas en el sistema de control interno de la Compañía durante el proceso de auditoría del año 20XX y que se detalla en la sección 2.',
    paragraph2:
      'Estos cuadros brindarán una comprensión rápida e integral de nuestra perspectiva sobre los temas identificados y la evaluación del impacto de dichas situaciones sobre las operaciones de la Compañía.',
    paragraph3:
      'En la sección 2 incluimos también algunos aspectos que consideramos de interés relevante para la Compañía en su constante búsqueda de fortalecimiento de sus controles internos.',
    paragraph4:
      'Es preciso resaltar que una deficiencia en el control interno y una deficiencia significativa en la misma, se definen según la Norma Internacional de Auditoría (NIA 265.6), como sigue: ',
    paragraph5: {
      optionA: {
        title: 'Deficiencia en el control interno, existe cuando: ',
        text: [
          'un control diseñado, implantado o en operación no permite prevenir o detectar y corregir errores en los estados financieros en forma oportuna; o ',
          'no existe un control necesario para prevenir o detectar y corregir errores en los estados financieros oportunamente.',
        ],
      },
      optionB: {
        title: 'Deficiencia significativa en el control interno ',
        text: [
          'Una deficiencia o combinación de deficiencias en el control interno que, según el criterio profesional del auditor, es de suficiente importancia que merece la atención de aquellos encargados del gobierno de una entidad.',
        ],
      },
    },
    paragraph6:
      'En este sentido, hemos identificado ciertas deficiencias en el sistema de control interno que, en función de su impacto en las operaciones de la Compañía, han sido resumidas en tres categorías, cuyos criterios específicos se describen a continuación: ',
  },
  deficiences: [
    {
      title: 'Alta',
      examples: [
        'Afecta la eficiencia y operatividad de la Compañía.',
        'No reduce el riesgo de fraude o irregularidades.',
        'Ausencia de un procedimiento de control clave, sin que exista un control paralelo.',
        'La Compañía puede ser multada o sancionada económicamente por incumplimiento de normas vigentes.',
        'No cumple con una adecuada salvaguarda de los principales activos de la Compañía.',
        'Existe incumplimiento de las normas internas de la Compañía, que podrían tener un efecto en terceros.',
        'Afectan la valuación y/o presentación de los estados financieros.',
      ],
    },
    {
      title: 'Media',
      examples: [
        'Ausencia de procedimientos de control clave; sin embargo, existe un control paralelo.',
        'Incumplimiento de las normas internas de la Compañía.',
        'Los procedimientos no se encuentran adecuadamente formalizados.',
      ],
    },
    {
      title: 'Baja',
      examples: ['Mejora del procedimiento de control existente.'],
    },
  ],
};

// 1. Create a new Presentation
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_4x3';

// Titulo para primer slide
const titleSlide = `Carta de recomendaciones de control interno al 31 de diciembre de ${cciMock.year}`;
const company = `${cciMock.company}`;
const period = `Diciembre-${cciMock.year}`;

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE',
  background: { color: 'FFFFFF' },
  objects: [
    {
      text: {
        text: titleSlide,
        options: {
          x: 0.5,
          y: '40%',
          w: '43%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 28,
          italic: true,
          bold: true,
        },
      },
    },
    {
      text: {
        text: company,
        options: {
          x: 0.5,
          y: '60%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 14,
          italic: false,
          bold: false,
        },
      },
    },
    {
      text: {
        text: period,
        options: {
          x: 0.5,
          y: '65%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 14,
          italic: false,
          bold: false,
        },
      },
    },
    {
      image: {
        x: '50%',
        y: '0%',
        w: '50%',
        h: '100%',
        path: `${process.env.PUBLIC_URL}/images/pwc-ppt.png`,
      },
    },
    {
      image: {
        x: '5%',
        y: '80%',
        w: '15%',
        h: '15%',
        path: `${process.env.PUBLIC_URL}/images/logo.png`,
      },
    },
  ],
});

const introIndex = [
  '1. ',
  'Resumen ejecutivo',
  '2. ',
  `Deficiencias de control identificadas en (rubro ${cciMock.deficiences[0].rubro})`,
  '3.',
  `Deficiencias de control identificadas en (rubro ${cciMock.deficiences[1].rubro})`,
];
const titleDeficiencies = `Deficiencias de control identificadas durante la auditoría del año ${cciMock.year}`;

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE2',
  background: { fill: 'EB8C00' },
  objects: [
    {
      text: {
        text: 'Introducción',
        options: {
          x: 0.5,
          y: '20%',
          w: '50%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 24,
          italic: true,
          bold: false,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: introIndex[0] + introIndex[1],
        options: {
          x: 0.5,
          y: '30%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 24,
          italic: true,
          bold: false,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: introIndex[2] + introIndex[3],
        options: {
          x: 0.5,
          y: '40%',
          w: '80%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 24,
          italic: true,
          bold: false,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: 'Índice',
        options: {
          x: '70%',
          y: '80%',
          w: '40%',
          aling: 'rigth',
          fontFace: 'Georgia',
          fontSize: 50,
          italic: true,
          bold: false,
          color: 'F1F1F1',
        },
      },
    },
  ],
});

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE3',
  background: { fill: 'EB8C00' },
  objects: [
    {
      text: {
        text: introIndex[0],
        options: {
          x: 0.5,
          y: '20%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 167,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: introIndex[1],
        options: {
          x: 0.5,
          y: '40%',
          w: '80%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 32,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
  ],
});

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE6',
  background: { fill: 'EB8C00' },
  objects: [
    {
      text: {
        text: introIndex[2],
        options: {
          x: 0.5,
          y: '20%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 167,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: introIndex[3],
        options: {
          x: 0.5,
          y: '45%',
          w: '80%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 32,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
  ],
});

// slide8
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE8',
  background: { fill: 'EB8C00' },
  objects: [
    {
      text: {
        text: introIndex[4],
        options: {
          x: 0.5,
          y: '20%',
          w: '50%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 167,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
    {
      text: {
        text: introIndex[5],
        options: {
          x: 0.5,
          y: '50%',
          w: '80%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 32,
          italic: true,
          bold: true,
          color: 'F1F1F1',
        },
      },
    },
  ],
});
// slide4
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE4',
  background: { fill: 'F1F1F1' },
  objects: [
    {
      text: {
        text: introIndex[1],
        options: {
          x: 0.5,
          y: '5%',
          w: '40%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: true,
          bold: true,
          color: '000000',
        },
      },
    },
    {
      text: {
        text: cciTemplate.summary.paragraph1,
        options: {
          x: 0.5,
          y: '5%',
          w: '40%',
          h: '30%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: false,
          bold: false,
          color: '000000',
        },
      },
    },
    {
      text: {
        text: cciTemplate.summary.paragraph2,
        options: {
          x: 0.5,
          y: '15%',
          w: '40%',
          h: '30%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: false,
          bold: true,
          color: '000000',
        },
      },
    },
    {
      text: {
        text: cciTemplate.summary.paragraph3,
        options: {
          x: 0.5,
          y: '30%',
          w: '40%',
          h: '30%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: false,
          bold: true,
          color: '000000',
        },
      },
    },
    {
      text: {
        text: cciTemplate.summary.paragraph4,
        options: {
          x: 0.5,
          y: '40%',
          w: '40%',
          h: '30%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: false,
          bold: false,
          color: '000000',
        },
      },
    },
  ],
});
// slide5
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE5',
  background: { fill: 'F1F1F1' },
});
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE10',
  objects: [
    {
      text: {
        text: 'pwc.com.pe',
        options: {
          x: 0.5,
          y: '10%',
          w: '40%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 32,
          italic: true,
          bold: true,
          color: '000000',
        },
      },
    },
    {
      text: {
        text:
          '© 2020 Gaveglio Aparicio y Asociados Sociedad Civil de Responsabilidad Limitada. Todos los derechos reservados. En este documento, "PwC” hace referencia a Gaveglio Aparicio y Asociados Sociedad Civil de Responsabilidad Limitada., que es una firma miembro de PricewaterhouseCoopers International Limited, cada una de las cuales es una entidad jurídica separada e independiente.',
        options: {
          x: 0.5,
          y: '90%',
          w: '40%',
          aling: 'left',
          fontFace: 'Georgia',
          fontSize: 9,
          italic: false,
          bold: false,
          color: '000000',
        },
      },
    },
  ],
});
// 2. Add a Slide
pptx.addSlide({ masterName: 'MASTER_SLIDE' });
pptx.addSlide({ masterName: 'MASTER_SLIDE2' });
pptx.addSlide({ masterName: 'MASTER_SLIDE3' });
const slide4 = pptx.addSlide({ masterName: 'MASTER_SLIDE4' });
const tableDeficiences = pptx.addSlide({ masterName: 'MASTER_SLIDE5' });
pptx.addSlide({ masterName: 'MASTER_SLIDE6' });
const tableRecommendCci1 = pptx.addSlide({ masterName: 'MASTER_SLIDE7' });
pptx.addSlide({ masterName: 'MASTER_SLIDE8' });
const tableRecommendCci2 = pptx.addSlide({ masterName: 'MASTER_SLIDE9' });
pptx.addSlide({ masterName: 'MASTER_SLIDE10' });

// AGREGAR TEXTO RESUMEN A SLIDE 4
slide4.addText(
  [
    {
      text: cciTemplate.summary.paragraph5.optionA.title,
      options: {
        bullet: { type: 'number', style: 'alphaLcPeriod' },
        x: 0.5,
        y: '40%',
        w: '40%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: true,
        color: '000000',
      },
    },
    {
      text: cciTemplate.summary.paragraph5.optionA.text[0],
      options: {
        bullet: { type: 'number', style: 'romanLcPeriod' },
        color: '000000',
      },
    },
    {
      text: cciTemplate.summary.paragraph5.optionA.text[1],
      options: {
        bullet: { type: 'number', style: 'romanLcPeriod' },
        color: '000000',
      },
    },
    {
      text: cciTemplate.summary.paragraph5.optionB.title,
      options: {
        bullet: { type: 'number', style: 'alphaLcPeriod' },
        x: 0.5,
        y: '40%',
        w: '40%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: true,
        color: '000000',
      },
    },
    {
      text: cciTemplate.summary.paragraph5.optionB.text[0],
      options: {
        bullet: { type: 'number', style: 'romanLcPeriod' },
        color: '000000',
      },
    },
  ],
  { x: 0.5, y: '65%', w: '40%', h: 1.4, color: 'ABABAB', margin: 1 },
);
slide4.addText(
  [
    {
      text: cciTemplate.summary.paragraph6,
      options: {
        x: 0.5,
        y: '40%',
        w: '40%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: false,
        color: '000000',
      },
    },
  ],
  { x: '50%', y: '10%', w: '40%', h: 1.4, color: 'ABABAB', margin: 1 },
);

const generatorBullet = (arr) => {
  return arr.map((str) => ({
    text: str,
    options: {
      bullet: { style: 'romanLcPeriod' },
      color: '000000',
      margin: 1,
      fontFace: 'Georgia',
      fontSize: 10,
    },
  }));
};
slide4.addText(
  [
    {
      text: cciTemplate.deficiences[0].title,
      options: {
        x: 0.5,
        y: '20%',
        w: '40%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: true,
        color: '000000',
      },
    },
    ...generatorBullet(cciTemplate.deficiences[0].examples),
    {
      text: cciTemplate.deficiences[1].title,
      options: {
        x: 0.5,
        y: '20%',
        w: '50%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: true,
        color: '000000',
        lineSpacing: 28,
      },
    },
    ...generatorBullet(cciTemplate.deficiences[1].examples),
    {
      text: cciTemplate.deficiences[2].title,
      options: {
        x: 0.5,
        y: '20%',
        w: '50%',
        h: '30%',
        aling: 'left',
        fontFace: 'Georgia',
        fontSize: 10,
        italic: false,
        bold: true,
        color: '000000',
        lineSpacing: 28,
      },
    },
    ...generatorBullet(cciTemplate.deficiences[2].examples),
  ],
  { x: '50%', y: '20%', w: '40%', h: '60%', color: 'ABABAB', margin: 1 },
);

// TABLAS
const row1 = ['Observación', 'Nivel de importancia'];
const row2 = ['Nº', 'Concepto', 'Alto', 'Medio', 'Bajo'];

// Función para generar las fila de la tabla1 de acuerdo a los elementos en cciMock.deficiences
const generatorRow = (cci) => {
  return cci.deficiences.map((ele, index) => {
    return [
      {
        text: `${index + 1} .`,
        options: { align: 'center', fontFace: 'Georgia', colspan: 1, rowH: 0.5 },
      },
      {
        text: ele.title,
        options: { align: 'left', fontFace: 'Georgia', colspan: 5, rowH: 0.5 },
      },
      {
        text: ele.level === 'Alto' ? 'x' : '',
        options: { align: 'left', fontFace: 'Georgia', colspan: 1, rowH: 0.5 },
      },
      {
        text: ele.level === 'Medio' ? 'x' : '',
        options: { align: 'left', fontFace: 'Georgia', colspan: 1, rowH: 0.5 },
      },
      {
        text: ele.level === 'Bajo' ? 'x' : '',
        options: { align: 'left', fontFace: 'Georgia', colspan: 1, rowH: 0.5 },
      },
    ];
  });
};

const titleRows = [
  [
    {
      text: row1[0],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        color: 'F1F1F1',
        colspan: 6,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: row1[1],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        color: 'F1F1F1',
        colspan: 3,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
  ],
  [
    {
      text: row2[0],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 1,
        rowH: 0.5,
        color: 'F1F1F1',
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: row2[1],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 5,
        rowH: 0.5,
        color: 'F1F1F1',
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: row2[2],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 1,
        rowH: 0.5,
        color: 'F1F1F1',
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: row2[3],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 1,
        rowH: 0.5,
        color: 'F1F1F1',
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: row2[4],
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 1,
        rowH: 0.5,
        color: 'F1F1F1',
        fill: { color: 'EB8C00' },
      },
    },
  ],
  ...generatorRow(cciMock),
];

tableDeficiences.addText(introIndex[1], {
  x: 0.5,
  y: '10%',
  w: '50%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 10,
  italic: true,
  bold: true,
  color: '000000',
});
tableDeficiences.addText(titleDeficiencies, {
  x: 0.5,
  y: '20%',
  w: '50%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 12,
  italic: false,
  bold: true,
  color: 'EB8C00',
});
tableDeficiences.addTable(titleRows, {
  x: 0.5,
  y: '30%',
  w: 9,
  h: 0.3,
  colW: [1, 1, 1, 1],
  rowH: 0.3,
  border: { type: 'solid' },
});
const subject = [
  [
    {
      text: 'Asunto',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 6,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: 'Recomendación',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
  ],
  [
    {
      text: cciMock.deficiences[0].description,
      options: {
        align: 'center',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 3,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[0].example,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 3,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[0].recommendation,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
  ],
];
tableRecommendCci1.addText(introIndex[3], {
  x: 0.5,
  y: '10%',
  w: '80%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 10,
  italic: true,
  bold: true,
  color: '000000',
});
tableRecommendCci1.addText(cciMock.deficiences[0].title, {
  x: 0.5,
  y: '20%',
  w: '80%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 12,
  italic: false,
  bold: true,
  color: 'EB8C00',
});
tableRecommendCci1.addTable(subject, {
  x: 0.5,
  y: '25%',
  w: '70%',
  h: 0.3,
  colW: 1,
  rowH: 0.3,
  border: { type: 'solid' },
});

const risk = [
  [
    {
      text: 'Riesgo',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: 'Respuesta de la Gerencia',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
  ],
  [
    {
      text: cciMock.deficiences[0].level,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[0].answer,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
  ],
];

tableRecommendCci1.addTable(risk, {
  x: 0.5,
  y: '70%',
  w: 9,
  h: 0.3,
  colW: 2,
  rowH: 0.3,
  border: { type: 'solid' },
});

// CCI 2
const subject2 = [
  [
    {
      text: 'Asunto',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 6,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: 'Recomendación',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
  ],
  [
    {
      text: cciMock.deficiences[1].description,
      options: {
        align: 'center',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 3,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[1].example,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 3,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[1].recommendation,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
  ],
];
tableRecommendCci2.addText(introIndex[5], {
  x: 0.5,
  y: '10%',
  w: '80%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 10,
  italic: true,
  bold: true,
  color: '000000',
});
tableRecommendCci2.addText(cciMock.deficiences[1].title, {
  x: 0.5,
  y: '20%',
  w: '80%',
  aling: 'center',
  fontFace: 'Georgia',
  fontSize: 12,
  italic: false,
  bold: true,
  color: 'EB8C00',
});
tableRecommendCci2.addTable(subject2, {
  x: 0.5,
  y: '25%',
  w: '70%',
  h: 0.3,
  colW: 1,
  rowH: 0.3,
  border: { type: 'solid' },
});

const risk2 = [
  [
    {
      text: 'Riesgo',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
    {
      text: 'Respuesta de la Gerencia',
      options: {
        align: 'left',
        fontFace: 'Georgia',
        colspan: 2,
        rowH: 0.5,
        fill: { color: 'EB8C00' },
      },
    },
  ],
  [
    {
      text: cciMock.deficiences[1].level,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
    {
      text: cciMock.deficiences[1].answer,
      options: {
        align: 'left',
        fontFace: 'Georgia',
        rowspan: 3,
        colspan: 2,
        rowH: 0.5,
      },
    },
  ],
];
tableRecommendCci2.addTable(risk2, {
  x: 0.5,
  y: '80%',
  w: 9,
  h: 0.3,
  colW: 2,
  rowH: 0.3,
  border: { type: 'solid' },
});

const Export = () => (
  <div>
    <button type="button" onClick={() => pptx.writeFile('CCI.pptx')}>
      Export ppt
    </button>
  </div>
);

export default Export;
