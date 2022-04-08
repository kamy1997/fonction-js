const eventsList = [
    {
      "title": "Meeting A",
      "start": "2017-02-21T05:00:00-05:00",
      "end": "2017-02-21T06:00:00-05:00"
    },
    {
      "title": "Meeting B",
      "start": "2017-02-21T07:00:00-05:00",
      "end": "2017-02-21T08:00:00-05:00"
    },
    {
      "title": "Meeting C",
      "start": "2017-02-21T09:10:00-05:00",
      "end": "2017-02-21T09:30:00-05:00"
    },
    {
      "title": "Meeting D",
      "start": "2017-02-21T09:45:00-05:00",
      "end": "2017-02-21T10:15:00-05:00"
    },
    {
      "title": "Meeting E",
      "start": "2017-02-21T10:20:00-05:00",
      "end": "2017-02-21T11:59:00-05:00"
    },
    {
      "title": "Meeting F",
      "start": "2017-02-21T12:15:59-05:00",
      "end": "2017-02-21T13:00:00-05:00"
    },
    {
      "title": "Meeting G",
      "start": "2017-02-21T15:45:00-05:00",
      "end": "2017-02-21T19:30:00-05:00"
    },
    {
      "title": "Meeting H",
      "start": "2017-02-21T20:45:00-05:00",
      "end": "2017-02-21T21:15:00-05:00"
    }
]

const findFreeTimes = (start, end, duration, events) => {
    let freeTimesList = []

    for (const key in events) {
        currentEvent = new Date(events[key].end)

        const nextIndex = (parseInt(key) + 1).toString()
        nextEvent = events[nextIndex]?.start

        freeTimes = (Math.abs(currentEvent - new Date(nextEvent)))
        if (freeTimes > 0) {
            freeTimesList.push({
                start: events[key].end,
                end:  events[nextIndex]?.start
            })
        }
    }
   
    return console.log(freeTimesList)
}

const start = new Date('2017-02-21T08:00:00-05:00'); 
const end = new Date('2017-02-21T18:00:00-05:00');
  
findFreeTimes (start, end, 30, eventsList); 