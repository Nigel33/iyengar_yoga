import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)
const MyCalendar = props => (
  <div style={{ backgroundColor: '#eee'}} >
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className="w-100 text-center mt-4 mb-4">Events Calendar</h2>
        </Col>
        <Col xs={12}>
          <Calendar
            localizer={localizer}
            events={[{
              title: 'test',
              start: "2020-03-24T10:30:00+08:00",
              end: "2020-03-24T17:00:00+08:00",
              'allDay?': false,
              'resource?': false
            },
            {
              title: 'test',
              start: "2020-03-12T10:30:00+08:00",
              end: "2020-03-14T17:00:00+08:00",
              'allDay?': false,
              'resource?': false
            },
            {
              title: 'test',
              start: "2020-03-17T10:30:00+08:00",
              end: "2020-03-22T17:00:00+08:00",
              'allDay?': false,
              'resource?': false
            }]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '70vh', width: '100%' }}
          />
        </Col>        
      </Row>
    </Container>    
  </div>
)

export default MyCalendar

// api_key: 'AIzaSyBjpWw7zNrnVhC1McIzarZp3PsGZCeazUk',
//     calendars: [
//       {
//         name: 'demo',
//         url: 'o64676s4p2qr8iqdvcd1j7dbs8@group.calendar.google.com'
//       }
//     ],

// {
//   "kind": "calendar#events",
//   "etag": "\"p32gcth7eiq5eg0g\"",
//   "summary": "Yoga",
//   "updated": "2020-03-08T05:47:58.772Z",
//   "timeZone": "Asia/Kuala_Lumpur",
//   "accessRole": "reader",
//   "defaultReminders": [],
//   "nextSyncToken": "CKDOxO6WiugCEAAYAQ==",
//   "items": [
//    {
//     "kind": "calendar#event",
//     "etag": "\"3167189658850000\"",
//     "id": "3v5gqsj97hcn3cqrkt41v4va8g",
//     "status": "confirmed",
//     "htmlLink": "https://www.google.com/calendar/event?eid=M3Y1Z3Fzajk3aGNuM2Nxcmt0NDF2NHZhOGcgbzY0Njc2czRwMnFyOGlxZHZjZDFqN2RiczhAZw",
//     "created": "2020-03-07T15:27:09.000Z",
//     "updated": "2020-03-07T15:27:09.425Z",
//     "summary": "yrdy",
//     "creator": {
//      "email": "mark.hing91@gmail.com"
//     },
//     "organizer": {
//      "email": "o64676s4p2qr8iqdvcd1j7dbs8@group.calendar.google.com",
//      "displayName": "Yoga",
//      "self": true
//     },
//     "start": {
//      "dateTime": "2020-05-13T04:00:00+08:00"
//     },
//     "end": {
//      "dateTime": "2020-05-13T09:30:00+08:00"
//     },
//     "iCalUID": "3v5gqsj97hcn3cqrkt41v4va8g@google.com",
//     "sequence": 0
//    },
//    {
//     "kind": "calendar#event",
//     "etag": "\"3167190108864000\"",
//     "id": "30m4nd7ru4ptak6rr2hf8vlk3j",
//     "status": "confirmed",
//     "htmlLink": "https://www.google.com/calendar/event?eid=MzBtNG5kN3J1NHB0YWs2cnIyaGY4dmxrM2ogbzY0Njc2czRwMnFyOGlxZHZjZDFqN2RiczhAZw",
//     "created": "2020-03-07T15:30:54.000Z",
//     "updated": "2020-03-07T15:30:54.432Z",
//     "summary": "test",
//     "creator": {
//      "email": "mark.hing91@gmail.com"
//     },
//     "organizer": {
//      "email": "o64676s4p2qr8iqdvcd1j7dbs8@group.calendar.google.com",
//      "displayName": "Yoga",
//      "self": true
//     },
//     "start": {
//      "date": "2020-05-11"
//     },
//     "end": {
//      "date": "2020-05-12"
//     },
//     "transparency": "transparent",
//     "iCalUID": "30m4nd7ru4ptak6rr2hf8vlk3j@google.com",
//     "sequence": 0
//    },
//    {
//     "kind": "calendar#event",
//     "etag": "\"3167292957544000\"",
//     "id": "3s8o8p8fbqsfn5olh6q3l8dsml",
//     "status": "confirmed",
//     "htmlLink": "https://www.google.com/calendar/event?eid=M3M4bzhwOGZicXNmbjVvbGg2cTNsOGRzbWwgbzY0Njc2czRwMnFyOGlxZHZjZDFqN2RiczhAZw",
//     "created": "2020-03-08T05:47:58.000Z",
//     "updated": "2020-03-08T05:47:58.772Z",
//     "summary": "party",
//     "creator": {
//      "email": "mark.hing91@gmail.com"
//     },
//     "organizer": {
//      "email": "o64676s4p2qr8iqdvcd1j7dbs8@group.calendar.google.com",
//      "displayName": "Yoga",
//      "self": true
//     },
//     "start": {
//      "dateTime": "2020-03-24T10:30:00+08:00"
//     },
//     "end": {
//      "dateTime": "2020-03-24T17:00:00+08:00"
//     },
//     "iCalUID": "3s8o8p8fbqsfn5olh6q3l8dsml@google.com",
//     "sequence": 0
//    }
//   ]
//  }
 