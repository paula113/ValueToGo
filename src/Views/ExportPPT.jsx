import React from 'react';
import pptxgen from 'pptxgenjs';
// import imagePpt from '../images/pwc-ppt.png';

const cciMock = {
  company: 'EmpresaABC',
  summary:
    'Hemos incluido en la página siguiente, para su conveniencia, un cuadro que resume nuestros hallazgos de las deficiencias identificadas en el sistema de control interno de la Compañía durante el proceso de auditoría del año 2018 y que se detalla en la sección 2. Estos cuadros brindarán una comprensión rápida e integral de nuestra perspectiva sobre los temas identificados y la evaluación del impacto de dichas situaciones sobre las operaciones de la Compañía. En la sección 2 incluimos también algunos aspectos que consideramos de interés relevante para la Compañía en su constante búsqueda de fortalecimiento de sus controles internos. Es preciso resaltar que una deficiencia en el control interno y una deficiencia significativa en la misma, se definen según la Norma Internacional de Auditoría (NIA 265.6), como sigue:',
  explained:
    'Deficiencia en el control interno, existe cuando: un control diseñado, implantado o en operación no permite prevenir o detectar y corregir errores en los estados financieros en forma oportuna no existe un control necesario para prevenir o detectar y corregir errores en los estados financieros oportunamente. Deficiencia significativa en el control interno – Una deficiencia o combinación de deficiencias en el control interno que, según el criterio profesional del auditor, es de suficiente importancia que merece la atención de aquellos encargados del gobierno de una entidad.',
  sumaryEnd:
    'En este sentido, hemos identificado ciertas deficiencias en el sistema de control interno que, en función de su impacto en las operaciones de la Compañía, han sido resumidas en tres categorías, cuyos criterios específicos se describen a continuación:',
  year: 2018,
  highDeficiencies: [
    [
      'Afecta la eficiencia y operatividad de la Compañía.',
      'No reduce el riesgo de fraude o irregularidades.',
      'Ausencia de un procedimiento de control clave, sin que exista un control paralelo.',
      'La Compañía puede ser multada o sancionada económicamente por incumplimiento de normas vigentes.',
      'No cumple con una adecuada salvaguarda de los principales activos de la Compañía.',
      'Existe incumplimiento de las normas internas de la Compañía, que podrían tener un efecto en terceros.',
      'Afectan la valuación y/o presentación de los estados financieros.',
    ],
  ],
  lowDeficiencies: [
    'Ausencia de procedimientos de control clave; sin embargo, existe un control paralelo.',
    'Incumplimiento de las normas internas de la Compañía.',
    'Los procedimientos no se encuentran adecuadamente formalizados.',
  ],
  mediumDeficiencies: ['Mejora del procedimiento de control existente.'],
};

// 1. Create a new Presentation
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_4x3';

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
  'Deficiencias de control identificadas',
];

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE2',
  background: { fill: 'EB8C00' },
  objects: [
    {
      line: {
        x: 0.0,
        // y: '100%',
        line: {
          color: 'F1F1F1',
          width: 1,
        },
      },
    },
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
        text: cciMock.summary,
        options: {
          x: 0.5,
          y: '10%',
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
        text: cciMock.explained,
        options: {
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
    },
    {
      text: {
        text: cciMock.sumaryEnd,
        options: {
          x: 0.5,
          y: '60%',
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
        text: cciMock.mediumDeficiencies,
        options: {
          x: '50%',
          y: '0%',
          w: '50%',
          h: '100%',
          aling: 'center',
          fontFace: 'Georgia',
          fontSize: 10,
          italic: false,
          bold: true,
          color: '000000',
        },
      },
    },
  ],
});

const titleRows = [
  [
    { text: 'Observación', options: { align: 'left', fontFace: 'Georgia' } },
    {
      text: 'Nivel de importancia',
      options: { align: 'left', fontFace: 'Georgia' },
    },
  ],
];
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE5',
  background: { fill: 'F1F1F1' },
});
// 2. Add a Slide
pptx.addSlide({ masterName: 'MASTER_SLIDE' });
pptx.addSlide({ masterName: 'MASTER_SLIDE2' });
pptx.addSlide({ masterName: 'MASTER_SLIDE3' });
pptx.addSlide({ masterName: 'MASTER_SLIDE4' });
const tableSlide = pptx.addSlide({ masterName: 'MASTER_SLIDE5' });
pptx.addSlide({ masterName: 'MASTER_SLIDE6' });
pptx.addSlide({ masterName: 'MASTER_SLIDE7' });
pptx.addSlide({ masterName: 'MASTER_SLIDE8' });

tableSlide.addTable(titleRows, { w: 10 });

const Export = () => (
  <div>
    <button type="button" onClick={() => pptx.writeFile('CCI.pptx')}>
      Export ppt
    </button>
  </div>
);

export default Export;
