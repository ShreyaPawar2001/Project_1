# HotelManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------------project details:-------------------------------------
. create new project 
2.create landing component (css -bg img/clr) --Home component
'' redirect to Home component
landing compo -->btns---> admin owner user
create db.json 
{ 
"admin" : [],
"owner " : [],
"user" : [],
"hotelDetails:[],
"hotelBooking":[]
}

module ->> admin,owner ,user (lazy loading)

signUp compo -> boostrap /material
{
      "name": "Santosh",
       "pan":"CTGPP2421P"
      "city": "pune"
      "email": "santosg@12gamil.com",
      "mobileNo": "9860908859",
      "gender": "male",
      "password": "Santosh1",
      "confirmPassword":"Santosh1",
      "Tnc":true
    }

signIn :
{
 "name": "Santosh",
 "password": "Santosh1"
}



Home compo : Admin User Owner -->set jouney flag to the service

db : {"admin":[{},{}], "user":[{},{}],  "owner":[{}], "hotelDetails":[{},{},{}],"hotelBooking":[{},{}]}

Admin journey:

admin btn click--> admin Landing compo 
 admin/owner/user Landing compo :back signIn() 
back - application landing screen

signUp-here --> open signUpCompo --> 
form submit post Api call endpoint /admin : db("admin":[]) 
After signup success redirect--> adminSuccess compo --> view_Hotel_List(btn)/hoteldetails
 view_Hotel_List(btn) click--> (hotelList compo)hotel booking -- oninit () -->get Api call endpoint/(hotelDetails)hotel booking
hotelList component its on adminSucess component-- table {{data}} add one column having delete icon -->click ->>deletApi Call. don't add edit icoin over here.

admin SignIn: signin form details have to match with db.
match-success with db details : match-->



redirect admin to adminSucces screen,--->booking form/registration form---> btn View Hotel details u will getto see the cards
match-fail -->show alert box/toaster and redirect admin again to signin screen.

 adminSucces/admin signin back:on the login page




user journey:
redirect to the userLandingcompo : signIn form
signUp submit : post Api --url enpoint /user --> redirect userSuccessCompo .
userSuccessCompo : view_Hotel_List --> redirect to userHotelListCompo .
userHotelListCompo :  view_Hotel_List btn click --> get Api call / hotelDetails.
show hotel details in table format, (u can add search box).and add one column of booknow option --> redirect user to bookNowCompo.
bookNowCompo : form-- userName, adhar no, mobNo, amount ,  submit --> post Api endpoint/hotelBooking.

user SignIn: signin form details have to match.
match-success with db details : match--> redirect user to userSucces screen,
match-fail -->show alert box and redirect user again to usersignin screen.


Owner journey: -->redirect to ownerLandingCompo
ownerSuccessCompo :  New_Hotel_Registration hotelList
signUp>> same above owenerSuccesCompo --> post Api /owner --redirect to ownerSucces screen

owner SignIn: signin form details have to match.
match-success with db details : match--> redirect owner to ownerSucces screen,
match-fail -->show alert box and redirect owner again to ownersignin screen.

ownerSucces screen: new_Hotel_Registration hotel_list
new_Hotel_Registration click-->  new_Hotel_RegistrationComponent --> form {
      "ownerName"
       owenerMobNo
      "hotelName"
      "hotelAddress"
      "hotelContact"
      "hotelMenu"
      "roomAvailable"
      "owenrCheck":
      "userPass": 
post api /hotelDetails --> rediect owner to ownerSuccesPage.

hotel_list: get api call /hotelDetails

use table formate to show hotelDetail data -->add two column like edit and delete
edit : redirect new_Hotel_RegistrationCompo ->show form in prefilled formate -->submit post APi /hotelDetails --> redirect to ownerSuccesPage
delete: deleteApi call -->redirect to ownerSuccesPage

delet Api: delete("https//localHost/hotelDetails/id")
get Api : get("https//localHost/hotelDetails")
post Api : post("https//localHost/hotelDetails" , formData)

---------------------------------------------------------------------------------------------------------------------------
Weather Application:

//https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=d85d6b62cd5b3d11e07f09beffd5f12b

//https://api.openweathermap.org/data/2.5/weather?id=524901&lat=16.7050&lon=74.2433&lang=hi&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric

ref project to clone:
https://github.com/santoshmulak/Weather-App.git
-------------------------------
1.create project weather application
2.forcast componnet
3.data service
landing Compo :  title {{click below for eather details}}
button >>> forcast component 

input [(ngModel)]='city' box--> take city name from user 

apiurl : https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric
url1 : 'https://api.openweathermap.org/data/2.5/weather?q='
url2 : '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric'
this.city = city
url = this.url1+this.city+url2

respo: 

weatherDetails = response

weatherDetails.name
weatherDetails.main.temp
weatherDetails.main.temp_min
weatherDetails.main.temp_max
weatherDetails.main.pressure
weatherDetails.main.humidity
weatherDetails.wind.speed
weatherDetails.sys.country



