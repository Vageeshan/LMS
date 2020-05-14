import React, { Fragment } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


class Calender extends React.Component {
    render() {
        return (
            <Fragment>
               
                            

                            <div class="col-xl-9 col-lg-8  col-md-12">
                                <div class="card ctm-border-radius shadow-sm">
                                    <div class="card-body">
                                        <div><FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                                            events={[
                                                { title: 'Project Meeting', date: '2020-04-01' },
                                                { title: 'Project Meeting', date: '2020-04-08' },
                                                { title: 'Project Demo', date: '2020-04-12' }
                                            ]}
                                        />

                                        </div>
                                    </div>
                                </div>
                            </div>
                   



               
            </Fragment>

        );
    }
    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
}
export default Calender;

