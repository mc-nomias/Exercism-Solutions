module BookingUpForBeauty

// The following line is needed to use the DateTime type
open System

let schedule (appointmentDateDescription: string): DateTime =
    DateTime.Parse appointmentDateDescription

let hasPassed (appointmentDate: DateTime): bool =
    if appointmentDate < DateTime.Now then
        true
    else
        false
     
let isAfternoonAppointment (appointmentDate: DateTime): bool =
    if appointmentDate.Hour >= 12 && appointmentDate.Hour < 18 then
        true
    else
        false

let description (appointmentDate: DateTime): string =
    if appointmentDate.Hour >= 12 && appointmentDate.Hour < 18 then
        "You have an appointment on " + appointmentDate.ToString("M/d/yyyy h:mm:ss") +  " PM."
    elif appointmentDate.Hour < 12 then
        "You have an appointment on " + appointmentDate.ToString("M/d/yyyy h:mm:ss") + " AM."
    else
        ""

let anniversaryDate(): DateTime =
    DateTime(DateTime.Now.Year, 9, 15, 0, 0, 0)
