// import React from 'react';

// export default function Aceptar() {
//   return (
//     <div>
//       <h1>Aceptar</h1>
//     </div>
//   );
// }

import React from 'react';
import calendar from '../Assets/calendar.png';
import activity1 from '../Assets/activity1.png';
import activity2 from '../Assets/activity2.png';

function Aceptar() {
  return (
    <div>
      <div>
        <button type="button">Añadir actividad</button>
      </div>
      <section>
        <img src={calendar} alt="calendario de actividades" />
        <img src={activity1} alt="actividad uno" />
        <img src={activity2} alt="actividad dos" />
      </section>
    </div>
  );
}

export default Aceptar;

// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//  <Grid container justify="space-around">
//       <KeyboardDatePicker
//         disableToolbar
//         variant="inline"
//         format="MM/dd/yyyy"
//         margin="normal"
//         id="date-picker-inline"
//         label="Date picker inline"
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//           'aria-label': 'change date',
//         }}
//       />
//     </Grid>
