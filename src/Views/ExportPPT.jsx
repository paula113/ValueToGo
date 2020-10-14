import React from 'react';
import pptxgen from 'pptxgenjs';
import imagePpt from '../images/pwc-ppt.png';

const cciMock = {
  summary:
    'Hemos incluido en la página siguiente, para su conveniencia, un cuadro que resume nuestros hallazgos de las deficiencias identificadas en el sistema de control interno de la Compañía durante el proceso de auditoría del año 2018 y que se detalla en la sección 2. Estos cuadros brindarán una comprensión rápida e integral de nuestra perspectiva sobre los temas identificados y la evaluación del impacto de dichas situaciones sobre las operaciones de la Compañía. En la sección 2 incluimos también algunos aspectos que consideramos de interés relevante para la Compañía en su constante búsqueda de fortalecimiento de sus controles internos.',
  year: 2018,
  highDeficiencies: [
    'Afecta la eficiencia y operatividad de la Compañía.',
    'No reduce el riesgo de fraude o irregularidades.',
    'Ausencia de un procedimiento de control clave, sin que exista un control paralelo.',
    'La Compañía puede ser multada o sancionada económicamente por incumplimiento de normas vigentes.',
    'No cumple con una adecuada salvaguarda de los principales activos de la Compañía.',
    'Existe incumplimiento de las normas internas de la Compañía, que podrían tener un efecto en terceros.',
    'Afectan la valuación y/o presentación de los estados financieros.',
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
pptx.layout = 'LAYOUT_WIDE';

pptx.defineSlideMaster({
  title: 'MASTER_SLIDE',
  background: { color: 'FFFFFF' },
  objects: [
    {
      line: {
        x: 3.5,
        y: 1.0,
        w: 6.0,
        line: { color: '0088CC', width: 5 },
      },
    },
    {
      rect: {
        x: 0.0,
        y: 5.3,
        w: '100%',
        h: 0.75,
        fill: { color: 'F1F1F1' },
      },
    },
    {
      text: {
        text: 'Status Report',
        options: {
          x: 3.0,
          y: 5.3,
          w: 5.5,
          h: 0.75,
        },
      },
    },
    {
      image: {
        x: 11.3,
        y: 6.4,
        w: 1.67,
        h: 0.75,
        path: { imagePpt },
      },
    },
  ],
  slideNumber: { x: 0.3, y: '90%' },
});

// 2. Add a Slide
const slide = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide.addText('ppt con imagen', { x: 0.5, y: 0.7, fontSize: 18 });

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
// const textSlide = cciMock.summary;
// const titleSlide = `Carta de recomendaciones de control interno al 31 de diciembre de ${cciMock.year}`;
// const optionsSlides = {
//   x: 0, y: 0, color: 'F1F1F1', fill: { color: 'EB8C00' }, align: pptx.AlignH.center,
// };
// slide.addText(textSlide, optionsSlides); // solo dos parámetros

const Export = () => (
  <div>
    <button type="button" onClick={() => pptx.writeFile('CCI.pptx')}>
      Export ppt
    </button>
  </div>
);

export default Export;
